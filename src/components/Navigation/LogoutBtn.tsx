"use client";
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { showToast } from '@/lib/toast';

export default function LogoutBtn() {
    const router = useRouter();

    const handleLogout = () => {
        try {
            fetch("/api/users/logout");
            router.replace('/');
            router.refresh();
        } catch (error) {
            console.error(error);
            showToast.error('Something went wrong!');
        }
    }
    return (
        <Button onClick={handleLogout} className='transition-all duration-100 hidden lg:block' size='sm' variant='outline'>Logout</Button>
    )
}
