# virtual-physio
echo "# virtual-physio" >> README.md 
git init 
git add README.md 
git commit -m "erstes Commit" 
git branch -M main 
git remote add origin https://github.com/Lemonsoft-creator/virtual-physio.git
 git push -u origin main
# Virtuel Physio – Pose Detection Modul

Dieses Modul integriert KI-gestützte Pose-Erkennung für die Trainingsansicht von Patient:innen.

### Features
- Live-Kamera-Pose-Detection mit TensorFlow.js + MoveNet
- Echtzeit-Feedback über Canvas
- DSGVO-freundlich (keine Datenübertragung nötig)

### Lokaler Start
```bash
npm install
npm run dev
