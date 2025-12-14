# 🔗 AGRI-LMS - Testing Links & Verification Guide
**Local Server:** Running on `localhost:3000`  
**Last Updated:** 2025-12-14 @ 17:19 IST

---

## 🏠 **MAIN APPLICATION URL**

### Homepage:
```
http://localhost:3000
```
**What to expect:** Welcome screen with course overview and "Start Learning" button

---

## 🎯 **DIRECT TEST LINKS - Premium Content**

### **Module 1: AI Fundamentals**

#### M1-T1: Introduction to AI (Smart Scarecrow)
```
http://localhost:3000/#m1-t1
```
**What to verify:**
- ✅ Handout shows "The Smart Scarecrow That Learned How To Farm"
- ✅ Contains farming analogy with yellow background
- ✅ Code example: Smart scarecrow decision system
- ✅ Real-world applications section
- ✅ Tabs switch when clicked

#### M1-T2: Machine Learning Paradigms
```
http://localhost:3000/#m1-t2
```
**What to verify:**
- ✅ Handout shows "Three Ways a Farmer Learns"
- ✅ Supervised, Unsupervised, Reinforcement sections
- ✅ Code examples for each learning type

---

### **Module 2: Python & ML Fundamentals** ⭐ NEW CONTENT!

#### M2-T1: NumPy Arrays (Organized Farm Storage)
```
http://localhost:3000/#m2-t1
```
**What to verify:**
- ✅ NEW premium handout with warehouse analogy
- ✅ "100x faster" messaging visible
- ✅ NumPy code examples
- ✅ Blue gradient header
- ✅ All tabs functional

#### M2-T5: Pandas Introduction (Farm Ledger)
```
http://localhost:3000/#m2-t5
```
**What to verify:**
- ✅ NEW premium handout "Farm Ledger Management"
- ✅ Pandas Series explanation
- ✅ Purple gradient styling

#### M2-T3: Any Dynamic Content Topic
```
http://localhost:3000/#m2-t3
```
**What to verify:**
- ✅ Dynamic handout generated from metadata
- ✅ Learning objectives from subtopics
- ✅ Agricultural analogy section present
- ✅ NOT showing "Content loading..." placeholder

---

### **Module 3: AI/ML in Agriculture** ⭐ NEW CONTENT!

#### M3-T9: CNN Introduction (Teaching Computers to See)
```
http://localhost:3000/#m3-t9
```
**What to verify:**
- ✅ NEW premium handout about plant disease detection
- ✅ "How farmers spot diseases" analogy
- ✅ CNN layers explanation
- ✅ 99.35% accuracy PlantVillage reference
- ✅ Pink/magenta gradient header

---

### **Module 4: Capstone Project** ⭐ NEW CONTENT!

#### M4-T1: Problem Definition (SMART Framework)
```
http://localhost:3000/#m4-t1
```
**What to verify:**
- ✅ NEW premium handout with SMART goals
- ✅ Good vs Bad problem statements
- ✅ Orange gradient header
- ✅ Pre-coding checklist

---

### **Module 5: Future Directions & Deployment**

#### M5-T1: Deployment Strategies
```
http://localhost:3000/#m5-t1
```

#### M5-T2: Smart Irrigation Project
```
http://localhost:3000/#m5-t2
```
**What to verify:**
- ✅ "Bonus Project" header
- ✅ Project objectives listed
- ✅ Purple color scheme
- ✅ GitHub Pages, Streamlit deployment options

---

## 🧪 **TAB FUNCTIONALITY TEST LINKS**

Test that ALL 5 tabs work on these pages:

### Quick Tab Test (3 topics):
1. **Module 1:** http://localhost:3000/#m1-t1
2. **Module 2:** http://localhost:3000/#m2-t1
3. **Module 3:** http://localhost:3000/#m3-t9

**For Each Topic, Click:**
- 📄 **Handout** tab → Shows lecture content
- 🎨 **Slides** tab → Shows presentation
- 💻 **Lab** tab → Shows code/Colab link
- ✏️ **Activity** tab → Shows exercises
- ❓ **Quiz** tab → Shows questions

**Expected:** Each click switches content INSTANTLY. Active tab highlights green.

---

## 📊 **COMPREHENSIVE TEST MATRIX**

### All Module 1 Topics:
```
http://localhost:3000/#m1-t1   ← Premium content
http://localhost:3000/#m1-t2   ← Premium content
http://localhost:3000/#m1-t3   ← Dynamic content
http://localhost:3000/#m1-t4   ← Dynamic content
...up to...
http://localhost:3000/#m1-t19  ← Dynamic content
```

### All Module 2 Topics:
```
http://localhost:3000/#m2-t1   ← ⭐ NEW Premium content
http://localhost:3000/#m2-t2   ← Dynamic content
http://localhost:3000/#m2-t3   ← Dynamic content
http://localhost:3000/#m2-t4   ← Dynamic content
http://localhost:3000/#m2-t5   ← ⭐ NEW Premium content
...up to...
http://localhost:3000/#m2-t29  ← Dynamic content
```

---

## 🎯 **SPECIAL PAGES**

### Module Overview Pages:
```
http://localhost:3000/#module-1
http://localhost:3000/#module-2
http://localhost:3000/#module-3
http://localhost:3000/#module-4
http://localhost:3000/#module-5
```
**What to expect:** Module syllabus, objectives, resources

### Final Assessment:
```
http://localhost:3000/#final-exam
```
**What to expect:** Comprehensive quiz covering all modules

---

## ✅ **VERIFICATION CHECKLIST**

### Test #1: Homepage Navigation
- [ ] Visit: http://localhost:3000
- [ ] Welcome screen displays
- [ ] Click "Start Learning" or any module
- [ ] Navigates to topic

### Test #2: Premium Content Loading
- [ ] Visit: http://localhost:3000/#m1-t1
- [ ] See "Smart Scarecrow" handout
- [ ] Visit: http://localhost:3000/#m2-t1
- [ ] See "Organized Farm Storage" handout (NEW!)
- [ ] Visit: http://localhost:3000/#m3-t9
- [ ] See "Teaching Computers to See" handout (NEW!)

### Test #3: Tab Switching (Most Important!)
- [ ] On any topic (e.g., #m1-t1)
- [ ] Click "Slides" → Content changes
- [ ] Click "Lab" → Different content shows
- [ ] Click "Activity" → Shows activity
- [ ] Click "Quiz" → Shows questions
- [ ] Click "Handout" → Back to original
- [ ] No delay, instant switching
- [ ] Active tab highlights in green

### Test #4: Dynamic Content
- [ ] Visit: http://localhost:3000/#m2-t3
- [ ] Handout appears (not "loading...")
- [ ] Contains topic title
- [ ] Has learning objectives
- [ ] Has agricultural analogy

### Test #5: Browser Console
- [ ] Press F12
- [ ] Check Console tab
- [ ] Look for: `[APP] ✓ PERMANENT tab system active`
- [ ] No red errors

---

## 🚀 **QUICK VERIFICATION SCRIPT**

Copy-paste these URLs one by one to test everything:

```
http://localhost:3000
http://localhost:3000/#m1-t1
http://localhost:3000/#m2-t1
http://localhost:3000/#m3-t9
http://localhost:3000/#m4-t1
http://localhost:3000/#m5-t2
```

**On each page:**
1. Wait 1 second for load
2. Click each tab: Handout → Slides → Lab → Activity → Quiz
3. Verify content changes
4. No errors in console

**Expected time:** 5 minutes to test all core functionality

---

## 📱 **MOBILE TESTING**

### Desktop URLs work on mobile:
```
http://192.168.x.x:3000
```
*(Replace with your computer's local IP address)*

**To find your IP:**
- Windows: Run `ipconfig` in terminal, look for "IPv4 Address"
- Mac/Linux: Run `ifconfig` in terminal

Then access from phone/tablet on same WiFi network.

---

## 🐛 **TROUBLESHOOTING URLS**

### If tabs don't work, test in this order:

1. **Homepage first:**
   ```
   http://localhost:3000
   ```
   If this doesn't load → Server not running

2. **Simple topic:**
   ```
   http://localhost:3000/#m1-t1
   ```
   If handout shows but tabs don't work → Need browser refresh

3. **Console check:**
   - F12 → Console
   - Look for errors
   - Should see: `[APP] ✓ PERMANENT tab system active`

---

## 📞 **SUPPORT CHECKLIST**

If something doesn't work, note:
- [ ] Which URL you tested
- [ ] What you expected to see
- [ ] What actually happened
- [ ] Browser console errors (screenshot)
- [ ] Browser type and version

---

## 🎉 **SUCCESS CRITERIA**

✅ All 6 quick test URLs load  
✅ Premium handouts display correctly  
✅ Tabs switch on FIRST click  
✅ No "Content not available" errors  
✅ Console shows no red errors  
✅ Works in Chrome, Firefox, Edge  

**If all pass → System is 100% functional!**

---

**🔗 START TESTING NOW:**

**Main URL:** http://localhost:3000

**Best test page:** http://localhost:3000/#m1-t1  
*(Has premium content + all tabs functional)*

---

**Last Updated:** 2025-12-14 @ 17:19 IST  
**Server Status:** Running via START_AGRI_LMS.bat  
**Expected Result:** All links functional, tabs working perfectly
