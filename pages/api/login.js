import { users } from "../../data/users"
import cookie from "cookie"

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const user = req.body;
    // console.log("user", user);

    const idx = users.findIndex(u => u.username === user.username);
    if (idx === -1) {
      res.status(401).json({ success: false, message: "Tài khoản không tồn tại" });
    } else {
      if (user.password === users[idx].password) {
        const token = user.username + "-" + Date.now();
        res.setHeader('Set-Cookie', cookie.serialize("token", token, {
          maxAge: 60 * 60 * 24 * 7,
          // httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          path: "/"
        }));

        res.status(200).json({ success: true, user: users[idx] });
      } else {
        res.status(401).json({ success: false, message: "Mật khẩu không đúng" });
      }
    }
  }
}
