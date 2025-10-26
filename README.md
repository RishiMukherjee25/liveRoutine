# 📚 Real-Time Class Routine Web App

A responsive, real-time class routine tracker built with **React** and **Tailwind CSS**. It shows live countdowns to your current and upcoming classes, supports break time logic, and delivers a clean, motivational UI.

---

## ✨ Features

- ⏳ **Live countdown** to class start and end (hours, minutes, seconds)
- 📘 **Current class details**: subject, code, teacher, room
- 🔜 **Next class preview** (non-clickable)
- 🧘 **Break time support** with countdown and labels
- 🕒 **12-hour time format** with AM/PM
- 🗓️ **Only today's routine shown**
- ✅ **"Enough for today"** message when the day ends
- 🎬 **GIF** when classes are over
- 📅 **Next day class preview** with day name

---

## 🛠️ Tech Stack

- ⚛️ React
- 🎨 Tailwind CSS
- 🧠 Custom time logic (IST timezone)
- 📦 Modular component structure

---
## Want to Contribute ?

- Please go through [CONTRIBUTING.md](./CONTRIBUTING.md).
---

## 🌟 Key Features Explained

### Real-Time Countdown
- **Live Updates**: Countdown refreshes every second
- **Smart Formatting**: Shows hours, minutes, and seconds appropriately
- **Break Detection**: Automatically identifies break periods

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Cross-Platform**: Works on desktop, tablet, and mobile
- **Touch-Friendly**: Optimized for touch interactions

### Time Management
- **12-Hour Format**: User-friendly AM/PM display
- **IST Timezone**: Configured for Indian Standard Time
- **Automatic Updates**: Real-time synchronization

---

## 🧪 Development

### Code Quality
- **ESLint**: Configured for React best practices
- **TypeScript Support**: Ready for type safety
- **Component Structure**: Modular and reusable components

### Performance
- **Vite Build**: Fast development and build times
- **React 19**: Latest React features and optimizations
- **Tailwind CSS**: Utility-first CSS framework

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🚨 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process using port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

**Dependencies not installing**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors**
```bash
# Check for linting errors
npm run lint
# Clear build cache
npm run build -- --force
```

---

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) for the user interface
- Styled with [Tailwind CSS](https://tailwindcss.com/) for beautiful design
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Smooth scrolling with [Lenis](https://studio-freight.com/lenis/)

---

## 👨‍💻 Maintained By

**Smalakar** - Full Stack Developer

- 🌐 **GitHub**: [@smalakargh](https://github.com/smalakargh)
- 📧 **Contact**: Available through GitHub issues
- 🚀 **Projects**: Building innovative web applications

*Passionate about creating efficient, user-friendly applications that solve real-world problems.*

---
## ✨ Contributors

#### Thanks to all the wonderful contributors 💖

<a href="https://github.com/smalakargh/liveRoutine/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=smalakargh/liveRoutine" />
</a>

---

## 📞 Support & Community

- 🐛 **Bug Reports**: [Create an issue](https://github.com/smalakargh/liveRoutine/issues)
- 💡 **Feature Requests**: [Suggest new features](https://github.com/smalakargh/liveRoutine/issues)
- 📚 **Documentation**: Check this README and code comments
- 🤝 **Contributions**: See the Contributing section above

---

**Live Routine** - Making your daily schedule management simple and efficient. ⏰✨
