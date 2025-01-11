export async function POST(req) {
    const { name, email, message } = await req.json();

    const TELEGRAM_BOT_TOKEN = '7623504393:AAHY7fa2y9Rj4Zy2kJW0Ly466wQpmz0-_u0';
    const CHAT_ID = '6599811646';

    const text = `
  TIN NHẮN TỪ TRANG WEB:
  👤 Tên: ${name}
  📧 Email: ${email}
  💬 Lời Nhắn: ${message}
  `;

    const encodedText = encodeURIComponent(text);
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodedText}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            return new Response(JSON.stringify({ message: 'Gửi tin nhắn thành công!' }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ message: 'Lỗi khi gửi tin nhắn' }), { status: 500 });
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Lỗi server', error: error.message }), { status: 500 });
    }
}
