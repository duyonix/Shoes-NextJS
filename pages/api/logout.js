import cookie from "cookie"

export default function handler(req, res) {
    res.setHeader('Set-Cookie', cookie.serialize("token", "", {
        expires: new Date(0),
        // httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        path: "/"
    }));

    res.status(200).json({ success: true });
}
