import { users } from "../../data/users"

export default function handler(req, res) {
    if (req.method === "POST") {
        const username = req.body;
        const idx = users.findIndex(u => u.username === username);
        if (idx === -1) {
            res.status(401).json({ success: false, message: "Tài khoản không tồn tại" });
        } else {
            res.status(200).json({ success: true, user: users[idx] });
        }
    }
}