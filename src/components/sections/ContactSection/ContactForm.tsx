import Notification from '@/components/Notification/Notification';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [isNotificationVisible, setNotificationVisible] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleShowNotification = () => {
        if (Object.values(formData).every((value) => value === '')) {
            setStatus('Please fill out form first!');
            setNotificationVisible(true);
            setTimeout(() => setNotificationVisible(false), 7000);
        } else {
            setNotificationVisible(true);
            setTimeout(() => setNotificationVisible(false), 7000);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Đang gửi...');

        try {
            const res = await fetch('/api/sendTelegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('Message sent!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Wrong! try again.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Không thể kết nối đến server!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-10 justify-center">
            <div className="flex flex-col gap-2">
                <span className="font-code text-xl font-semibold text-white">Your name</span>
                <input
                    type="text"
                    name="name"
                    placeholder="Nguyen Van A"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-b-2 border-white w-full bg-transparent outline-none caret-white p-5 py-2 text-white text-xl placeholder:text-base"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-code text-xl font-semibold text-white">Your email</span>
                <input
                    type="email"
                    name="email"
                    placeholder="nguyen****@***.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-b-2 border-white w-full bg-transparent outline-none caret-white p-5 py-2 text-white text-xl placeholder:text-base"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-code text-xl font-semibold text-white">Your message</span>
                <textarea
                    name="message"
                    placeholder="Hello, can we discuss about..."
                    value={formData.message}
                    onChange={handleChange}
                    className="border-b-2 border-white w-full min-h-24 bg-transparent outline-none caret-white p-5 py-2 text-white text-xl placeholder:text-base resize-y"
                    required
                />
            </div>
            <div className="flex w-full justify-center items-center">
                <button
                    type="submit"
                    className="w-40 h-10 font-bold bg-white hover:bg-white/50 hover:text-white transition-all duration-300"
                    onClick={handleShowNotification}
                >
                    Send
                </button>
            </div>
            <Notification
                message={status}
                isVisible={isNotificationVisible}
                onClose={() => setNotificationVisible(false)}
            />
        </form>
    );
}
