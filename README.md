# E-Commerce API Server (Backend)

ระบบหลังบ้าน (Backend API) สำหรับแพลตฟอร์ม E-Commerce พัฒนาด้วย Node.js, Express และจัดการฐานข้อมูล MySQL ผ่าน Prisma ORM เพื่อรองรับการทำงานของระบบร้านค้าออนไลน์อย่างมีประสิทธิภาพและปลอดภัย

---

## ฟีเจอร์หลัก (Key Features)

* **Authentication & Authorization**: ระบบสมัครสมาชิก, เข้าสู่ระบบ และการยืนยันตัวตนด้วย JSON Web Token (JWT) พร้อมมิดเดิลแวร์คัดกรองสิทธิ์ (User / Admin)
* **Product & Category Management**: ระบบจัดการข้อมูลสินค้าและหมวดหมู่สินค้า (CRUD) รองรับการเพิ่ม แก้ไข ลบ และดึงข้อมูล
* **Multiple Image Upload**: ระบบอัปโหลดและจัดการรูปภาพสินค้าได้พร้อมกันครั้งละหลายรูป โดยจัดเก็บไฟล์ไว้บนคลาวด์ **Cloudinary**
* **Cart & Order Management**: ระบบรับและบันทึกข้อมูลตะกร้าสินค้า รายการสั่งซื้อ ที่อยู่จัดส่ง รวมถึงการอัปเดตสถานะออเดอร์โดยผู้ดูแลระบบ
* **User Management**: แอดมินสามารถจัดการผู้ใช้งานในระบบได้ เช่น การปรับสิทธิ์ (Role) หรือการเปิด-ปิดบัญชีผู้ใช้ (Active / Disable)

---

## เทคโนโลยีที่ใช้ (Tech Stack)

* **Runtime**: Node.js
* **Framework**: Express.js
* **Database & ORM**: MySQL ร่วมกับ Prisma ORM
* **Authentication**: JSON Web Token (JWT) & bcrypt (สำหรับเข้ารหัสรหัสผ่าน)
* **Image Hosting**: Cloudinary

---

## โครงสร้างโฟลเดอร์ (Project Structure)

```text
server/
├── config/       # ไฟล์ตั้งค่าการทำงานระบบ (เช่น ตัวเชื่อมต่อคลาวด์ หรือฟังก์ชันระบบ)
├── controllers/  # ส่วนควบคุมและจัดการ Logic การทำงานหลักของ API Endpoints
├── middlewares/  # ตัวกรองความปลอดภัย (ตรวจสอบการล็อกอิน JWT, ตรวจสอบสิทธิ์ Admin)
├── prisma/       # โฟลเดอร์เก็บไฟล์โครงสร้างฐานข้อมูล (schema.prisma) และประวัติการ Migration
├── routes/       # ส่วนกำหนดเส้นทางสำหรับเรียกใช้งาน API ของระบบ
└── server.js     # จุดเริ่มต้นหลักการเปิดทำงานของ API Server
