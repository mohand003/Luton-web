# ملاحظات التحويل من Nuxt.js إلى Next.js

تم تحويل المشروع بالكامل من Nuxt.js (Vue.js) إلى Next.js (React). فيما يلي ملخص التحويلات:

## 📋 التحويلات الرئيسية

### 1. ملفات الإعدادات
- ✅ `package.json` - تم تحديثه مع dependencies الخاصة بـ Next.js و React
- ✅ `next.config.js` - تم إنشاؤه
- ✅ `tailwind.config.js` - تم تحديثه ليعمل مع Next.js
- ✅ `postcss.config.js` - تم إنشاؤه
- ✅ `.eslintrc.json` - تم إنشاؤه لإعدادات Next.js
- ✅ `jsconfig.json` - تم إنشاؤه لتحسين الاستيرادات

### 2. البنية الأساسية
- ✅ `pages/_app.js` - تم إنشاؤه كبديل لـ Nuxt app
- ✅ `pages/_document.js` - تم إنشاؤه لإدارة HTML head
- ✅ `pages/index.js` - تم تحويله من `pages/index.vue`

### 3. المكونات (Components)

#### Base Components
- ✅ `components/base/Button.js` - تم تحويله من Vue إلى React
- ✅ `components/base/Section.js` - تم تحويله
- ✅ `components/base/Navbar.js` - تم تحويله مع state management
- ✅ `components/base/Footer.js` - تم تحويله
- ✅ `components/base/Accordion.js` - تم تحويله مع useState

#### Landing Components
- ✅ `components/landing/CryptoStatistic.js` - تم تحويله
- ✅ `components/landing/Exchange.js` - تم تحويله
- ✅ `components/landing/BuyTradeImage.js` - تم تحويله
- ✅ `components/landing/PartnerImage.js` - تم تحويله
- ✅ `components/landing/TradingToolImage.js` - تم تحويله
- ✅ `components/landing/Step.js` - تم تحويله
- ✅ `components/landing/ListItem.js` - تم تحويله

#### Other Components
- ✅ `components/LineChart.js` - تم تحويله من vue-chartjs إلى react-chartjs-2
- ✅ `components/NavLink.js` - تم تحويله مع استخدام Next.js Link
- ✅ `components/Layout.js` - تم إنشاؤه كبديل لـ layouts/default.vue

### 4. Hooks و Plugins
- ✅ `hooks/useSmoothScroll.js` - تم تحويل smooth-scroll plugin إلى React hook
- ✅ `pages/_app.js` - تم دمج AOS initialization
- ✅ Chart.js - تم تسجيله في `_app.js`

### 5. الأصول (Assets)
- ✅ تم نقل جميع الصور من `assets/img` إلى `public/assets/img`
- ✅ `assets/css/main.css` - تم الاحتفاظ به مع تحديثات بسيطة
- ✅ تم نقل favicon إلى `public/favicon.ico`

### 6. التغييرات الرئيسية في الكود

#### Vue → React Patterns:
- `v-if` → conditional rendering `{condition && <Component />}`
- `v-for` → `.map()` function
- `v-bind` → props directly
- `@click` → `onClick`
- `:class` → `className`
- `data()` → `useState` hooks
- `methods` → regular functions
- `computed` → `useMemo` hooks
- `mounted()` → `useEffect` hooks

#### Nuxt → Next.js:
- `~/` aliases → `/` for public assets
- `require('~/assets/...')` → `/assets/...` in public folder
- `<Nuxt />` → `{children}` in Layout
- `this.$attrs` → spread props `{...props}`
- Vue transitions → CSS transitions or libraries

### 7. المكتبات المحدثة
- `vue-chartjs` → `react-chartjs-2`
- `vue-material-design-icons` → `react-icons`
- `vue2-smooth-scroll` → custom hook with smooth-scroll
- `nuxt` → `next`
- `vue` → `react` & `react-dom`

## 🚀 التشغيل

```bash
# تثبيت dependencies
npm install
# أو
yarn install

# تشغيل development server
npm run dev
# أو
yarn dev

# بناء المشروع للإنتاج
npm run build
# أو
yarn build
```

## 📝 ملاحظات إضافية

1. **الصور**: جميع الصور موجودة الآن في `public/assets/img/` ويمكن الوصول إليها من `/assets/img/...`

2. **Icons**: تم استخدام `react-icons` بدلاً من `vue-material-design-icons`، الأيقونات المستخدمة:
   - `react-icons/hi` - للقوائم والإغلاق
   - `react-icons/io5` - لمعظم الأيقونات الأخرى

3. **Charts**: تم استخدام `react-chartjs-2` مع Chart.js v2 (متوافق مع الكود الأصلي)

4. **Styling**: تم الاحتفاظ بـ Tailwind CSS كما هو، مع تحديثات بسيطة في ملف التكوين

5. **AOS**: تم الاحتفاظ بـ AOS للحركات والأنيميشن

## ⚠️ ما يحتاج إلى فحص

1. تأكد من أن جميع الصور تظهر بشكل صحيح
2. اختبر جميع التفاعلات (dropdowns, accordions, etc.)
3. اختبر responsiveness على مختلف الأجهزة
4. اختبر animations مع AOS

## 🎯 الخطوات التالية

1. قم بتشغيل `npm install` لتثبيت جميع المكتبات
2. قم بتشغيل `npm run dev` للبدء
3. افتح http://localhost:3000 في المتصفح
4. اختبر جميع الوظائف

---

تم التحويل بنجاح! 🎉

