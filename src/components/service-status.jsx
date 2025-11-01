'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ServiceStatus() {
  const [status, setStatus] = useState('checking');
  const [message, setMessage] = useState('Checking system status...');

  // ✅ Longest status text for reserved width
  const widestText = 'Maintenance';

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        //await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate delay
        const res = await fetch(
          'https://raw.githubusercontent.com/centerupt-stacks/cloud_explorer_status/main/status.json',
          { cache: 'no-store' }
        );
        const data = await res.json();
        setStatus(data.status || 'unknown');
        setMessage(data.message || '');
      } catch (error) {
        setStatus('unknown');
        setMessage('Unable to retrieve status');
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const getColor = () => {
    switch (status) {
      case 'online':
        return 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]';
      case 'maintenance':
        return 'bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]';
      case 'offline':
        return 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]';
      default:
        return 'bg-gray-500 shadow-[0_0_10px_rgba(107,114,128,0.7)]';
    }
  };

  const statusText =
    {
      online: 'Online',
      maintenance: 'Maintenance',
      offline: 'Offline',
      checking: 'Checking...',
      unknown: 'Unknown',
    }[status] || 'Unknown';

  return (
    <div
      className='flex items-center gap-2 text-sm text-gray-300 cursor-default group'
      title={message}
    >
      <motion.div
        className={cn('w-3 h-3 rounded-full', getColor())}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ✅ Fixed width container for widest text */}
      <motion.span
        key={status}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'font-medium tracking-wide inline-block',
          'text-left', // keep text aligned left inside fixed width
          status === 'online' && 'text-green-400',
          status === 'maintenance' && 'text-yellow-300',
          status === 'offline' && 'text-red-500',
          status === 'unknown' && 'text-gray-400'
        )}
        style={{ width: `${widestText.length}ch` }} // reserve space
      >
        {statusText}
      </motion.span>

      <Info className='w-4 h-4 opacity-0 group-hover:opacity-70 transition-opacity text-gray-400' />
    </div>
  );
}
