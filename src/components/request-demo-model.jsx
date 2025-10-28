'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// validation schema (zod)
const formSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().optional(),
});

export default function RequestDemoModal() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  // ✅ Reset form and success state whenever the modal opens
  useEffect(() => {
    if (open) {
      reset();
      setSuccess(false);
      setIsSubmitting(false);
    }
  }, [open, reset]);

  async function onSubmit(data) {
    setIsSubmitting(true);
    setSuccess(false);
    try {
      const res = await fetch('/api/request-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        reset();
        // Close after short delay so user can see success message
        setTimeout(() => setOpen(false), 1400);
      } else {
        const json = await res.json().catch(() => ({}));
        throw new Error(json?.error || 'Failed to send email');
      }
    } catch (err) {
      console.error(err);
      alert(
        'Something went wrong. Please try again or contact the product manager directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='border-accent text-accent bg-primary hover:bg-accent/10 hover:text-white font-semibold cursor-pointer'
        >
          Request a Demo
        </Button>
      </DialogTrigger>

      <DialogContent className='bg-gradient-to-b from-accent to-accent/30 border border-accent/40 max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold text-center text-foreground'>
            Request a Demo
          </DialogTitle>
        </DialogHeader>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-4'
        >
          <div>
            <Input
              placeholder='Full Name'
              {...register('name')}
              className='bg-primary text-white'
            />
            {errors.name && (
              <p className='text-red-400 text-sm mt-1'>{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder='Email Address'
              {...register('email')}
              className='bg-primary text-white'
            />
            {errors.email && (
              <p className='text-red-400 text-sm mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input
              placeholder='Company Name'
              {...register('company')}
              className='bg-primary text-white'
            />
          </div>

          <div>
            <Textarea
              placeholder='Briefly describe your cloud environment or needs'
              {...register('message')}
              className='bg-primary text-white'
            />
          </div>

          <Button
            variant='outline'
            type='submit'
            disabled={isSubmitting}
            className={cn(
              'w-full border-accent text-accent bg-primary hover:bg-accent/10 hover:text-white font-semibold cursor-pointer',
              isSubmitting && 'opacity-80 cursor-not-allowed'
            )}
          >
            {isSubmitting ? (
              <Loader2 className='animate-spin mr-2 h-4 w-4' />
            ) : success ? (
              'Sent ✅'
            ) : (
              'Send Request'
            )}
          </Button>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
