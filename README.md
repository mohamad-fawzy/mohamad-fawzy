# محمد فوزي البرلسي — Personal Portfolio (Static Version)

نسخة ثابتة (HTML/CSS/JS بسيطة) من نفس تصميم البورتفوليو، مالهاش أي علاقة بأودو
أو أي سيرفر — تقدر تنشرها مجانًا 100% على GitHub Pages أو Netlify أو Vercel.

## هيكل الملفات

```
portfolio_static/
├── index.html
├── css/style.css
└── js/script.js
```

## قبل النشر — عدّل بياناتك

في `index.html`، قسم "تواصل معي" في آخر الصفحة، غيّر:

- `your-email@example.com` → بريدك الإلكتروني الفعلي (اتغيّر في مكانين: الرابط والنص).
- `github.com/your-github` → رابط الـ GitHub الخاص بيك.
- رابط الـ LinkedIn موجود بالفعل: `linkedin.com/in/mohamedweb-developer` — تأكد إنه صحيح.

## النشر على GitHub Pages (الأسهل والأشهر)

1. أنشئ Repository جديد على GitHub، مثلاً باسم `portfolio`.
2. ارفع محتويات مجلد `portfolio_static` (مش المجلد نفسه، محتوياته) لجذر الـ Repository:

   ```bash
   cd portfolio_static
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

3. من صفحة الـ Repository على GitHub: **Settings → Pages**.
4. تحت **Source**، اختر **Deploy from a branch**، وحدد Branch: `main`، Folder: `/ (root)`.
5. احفظ (Save)، واستنى دقيقة أو اتنين.
6. موقعك هيبقى شغال على: `https://YOUR-USERNAME.github.io/portfolio`

لو عايز رابط بدون اسم الـ repo (يعني `https://YOUR-USERNAME.github.io` مباشرة)،
سمّي الـ repository نفسه `YOUR-USERNAME.github.io`.

## النشر على Netlify (أسرع، وبيديك رابط فورًا)

1. روح على [netlify.com](https://www.netlify.com) وسجّل دخول (فيه تسجيل بحساب GitHub مباشرة).
2. من الداشبورد: **Add new site → Deploy manually**.
3. اسحب مجلد `portfolio_static` بالكامل وسيبه يقع في المربع.
4. هيديك رابط شغال فورًا زي `https://your-site-name.netlify.app`.
5. تقدر تغيّر الاسم من **Site settings → Change site name**.

## النشر على Vercel

1. روح على [vercel.com](https://vercel.com) وسجّل دخول بحساب GitHub.
2. اربط نفس الـ Repository اللي عملته على GitHub.
3. Vercel هيكتشف إنه موقع ثابت تلقائيًا ويعمل Deploy على طول.
4. هيديك رابط زي `https://portfolio-yourname.vercel.app`.

## ربط دومين خاص بيك (اختياري)

الثلاث منصات (GitHub Pages / Netlify / Vercel) بتدعم ربط دومين مخصص مجانًا،
وبتوفر شهادة SSL مجانية تلقائيًا. كل اللي محتاجه إنك:

1. تشتري الدومين من أي مكان (Namecheap, GoDaddy, ...).
2. من إعدادات المنصة اللي اخترتها، تضيف الدومين وتاخد الـ DNS records المطلوبة.
3. تضيف الـ records دي في لوحة تحكم الدومين بتاعك.

## تحديث المحتوى مستقبلًا

الموقع بالكامل ملف HTML واحد (`index.html`) — أي تعديل في النص أو المشاريع أو
بيانات التواصل، تقدر تعمله مباشرة في الملف بأي محرر نصوص، وبعدين تعمل
`git push` (لو GitHub Pages) أو تسحب المجلد تاني (لو Netlify).
