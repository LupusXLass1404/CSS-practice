<!--
# 遊戲 UI 框架 - 重構完整指南

這份文件詳細說明如何將原有的「背包（Inventory）」特定組件重構為通用的遊戲 UI 框架。
-->

# 🎮 遊戲 UI 框架重構指南

## 📋 目錄
1. [重構概述](#重構概述)
2. [類別命名映射](#類別命名映射)
3. [組件系統](#組件系統)
4. [CSS 變數系統](#css-變數系統)
5. [使用示例](#使用示例)
6. [主題切換](#主題切換)
7. [響應式設計](#響應式設計)

---

## 重構概述

### 從特定到通用

**原始結構（特定於背包）：**
```
.inventory              → 背包容器
.inventory__nav        → 導覽區
.inventory__grid       → 物品網格
.inventory__slot       → 單一格子
```

**重構後結構（通用遊戲 UI）：**
```
.ui-panel              → 通用面板容器
.ui-panel__header      → 面板頭部
.ui-grid               → 通用網格系統
.ui-slot               → 通用格子/位置
```

### 設計原則

- **模組化** - 每個組件獨立設計，可自由組合
- **可複用** - 適用於背包、商店、角色屬性、技能欄等
- **可主題化** - 通過 CSS 變數快速切換色彩方案
- **彈性佈局** - 寬度自適應，不固定尺寸
- **響應式** - 在不同設備上自動調整

---

## 類別命名映射

### 完整映射表

| 原始類別 | 新類別 | 功能 |
|---------|--------|------|
| `.inventory` | `.ui-panel` | 容器面板 |
| `.inventory__nav` | `.ui-panel__header` | 面板頭部 |
| `.inventory__title` | `.ui-panel__title` | 標題 |
| `.inventory__tabs` | `.ui-tabs` | 分頁容器 |
| `.inventory__tab-item` | `.ui-tab` | 單一標籤 |
| `.inventory__container` | `.ui-panel__content` | 內容容器 |
| `.inventory__main` | `.ui-panel__body` | 主要內容區 |
| `.inventory__grid` | `.ui-grid` | 網格系統 |
| `.inventory__slot` | `.ui-slot` | 物品格子 |
| `.inventory__control-bar` | `.ui-control-bar` | 控制條 |
| `.capacity__count` | `.ui-value-box` | 數值顯示 |
| `.inventory__currency-bar` | `.ui-status-bar` | 狀態條 |
| `.inventory__search-bar` | `.ui-search-bar` | 搜尋條 |
| `.inventory__utility` | `.ui-panel__footer` | 面板底部 |

---

## 組件系統

### 1. 面板組件（Panel）

面板是所有遊戲 UI 的基礎容器。

**HTML 結構：**
```html
<div class="ui-panel">
  <!-- 頂部頭部區 -->
  <div class="ui-panel__header">
    <div class="ui-panel__title">背包</div>
    <div class="ui-panel__title-secondary">15/30 物品</div>
  </div>

  <!-- 主要內容區 -->
  <div class="ui-panel__content">
    <div class="ui-control-bar">
      <!-- 控制按鈕 -->
    </div>
    <div class="ui-panel__body">
      <!-- 主要內容 -->
    </div>
  </div>

  <!-- 底部操作區 -->
  <div class="ui-panel__footer">
    <!-- 底部按鈕和搜尋 -->
  </div>
</div>
```

**面板變體：**
```css
.ui-panel--fullwidth    /* 全寬面板 */
.ui-panel--fixed        /* 固定寬度 (400px) */
.ui-panel--centered     /* 居中對齐 */
```

### 2. 分頁組件（Tabs）

用於在面板內切換不同內容視圖。

**HTML 結構：**
```html
<div class="ui-tabs">
  <div class="ui-tab active">所有</div>
  <div class="ui-tab">消耗品</div>
  <div class="ui-tab">武器</div>
  <div class="ui-tab">防具</div>
</div>
```

**使用 JavaScript 激活：**
```javascript
// 切換標籤
document.querySelectorAll('.ui-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    // 移除所有標籤的 active 類別
    document.querySelectorAll('.ui-tab').forEach(t => t.classList.remove('active'));
    // 添加 active 到當前標籤
    this.classList.add('active');
  });
});
```

### 3. 按鈕組件（Buttons）

提供多種按鈕樣式。

**基本按鈕：**
```html
<button class="btn">預設</button>
<button class="btn btn--action">確認</button>
<button class="btn btn--black">取消</button>
<button class="btn btn--small">小</button>
<button class="btn btn--large">大</button>
```

**按鈕狀態：**
```html
<button class="btn btn--disabled">停用</button>
```

### 4. 網格組件（Grid）

用於顯示多個格子的容器。

**HTML 結構：**
```html
<!-- 自適應網格 -->
<div class="ui-grid">
  <div class="ui-slot">⚔️</div>
  <div class="ui-slot">🛡️</div>
</div>

<!-- 16 列固定網格 -->
<div class="ui-grid ui-grid--fixed">
  <!-- 格子將排成 16 列 -->
</div>

<!-- 4 列網格 -->
<div class="ui-grid ui-grid--4col">
  <!-- 格子將排成 4 列 -->
</div>
```

### 5. 格子組件（Slot）

表示單一的物品/裝備位置。

**HTML 結構：**
```html
<!-- 基本格子 -->
<div class="ui-slot">
  <div class="ui-slot__content">⚔️</div>
</div>

<!-- 帶有數量徽章 -->
<div class="ui-slot">
  <div class="ui-slot__content">💊</div>
  <div class="ui-slot__badge">12</div>
</div>

<!-- 選中狀態 -->
<div class="ui-slot active">
  <div class="ui-slot__content">🛡️</div>
</div>

<!-- 空格子 -->
<div class="ui-slot empty"></div>

<!-- 禁用格子 -->
<div class="ui-slot disabled">❌</div>
```

**格子狀態類別：**
```css
.ui-slot.active      /* 選中 */
.ui-slot.selected    /* 被選擇 */
.ui-slot.empty       /* 空格子 */
.ui-slot.disabled    /* 禁用 */
```

### 6. 狀態條組件（Status Bar）

顯示貨幣、積分等數值。

**HTML 結構：**
```html
<!-- 金幣顯示 -->
<div class="ui-status-bar">
  <div class="ui-status-bar__icon ui-status-bar__icon--gold">💰</div>
  <div class="ui-status-bar__value">9,999,999</div>
</div>

<!-- 點數顯示 -->
<div class="ui-status-bar">
  <div class="ui-status-bar__icon ui-status-bar__icon--point">⭐</div>
  <div class="ui-status-bar__value">1,500</div>
</div>
```

### 7. 搜尋條組件（Search Bar）

用於過濾或搜尋物品。

**HTML 結構：**
```html
<div class="ui-search-bar">
  <input type="text" class="ui-search-input" placeholder="搜尋物品...">
  <span class="ui-search-icon">🔍</span>
</div>
```

---

## CSS 變數系統

### 主題色彩變數

```css
:root {
  /* 主題基色 */
  --theme-primary: #36b8d0;        /* 主要操作色 */
  --theme-secondary: #6b7785;      /* 次要背景色 */
  --theme-dark: #313a43;           /* 深色背景 */
  --theme-light: #d0d4d7;          /* 淺色背景 */
  --theme-accent: #d0f000;         /* 強調色 */

  /* 邊框、文字、背景色彩... 都基於上述主題色 */
}
```

### 尺寸變數

```css
/* 間距 */
--size-spacing-xs: 0.125rem;
--size-spacing-sm: 0.5rem;
--size-spacing-md: 1rem;
--size-spacing-lg: 0.75rem;

/* 圓角 */
--size-border-radius-pill: 50rem;
--size-border-radius-default: 8px;

/* 格子尺寸 */
--size-slot-width: 64px;
--size-slot-gap: 8px;
```

---

## 使用示例

### 示例 1：基本背包面板

```html
<div class="ui-panel">
  <div class="ui-panel__header">
    <div class="ui-panel__title">玩家背包</div>
    <div class="ui-tabs">
      <div class="ui-tab active">所有</div>
      <div class="ui-tab">消耗品</div>
    </div>
  </div>

  <div class="ui-panel__content">
    <div class="ui-panel__body">
      <div class="ui-grid ui-grid--fixed">
        <div class="ui-slot"><div class="ui-slot__content">⚔️</div></div>
        <div class="ui-slot"><div class="ui-slot__content">🛡️</div></div>
        <!-- ... 更多格子 ... -->
      </div>
    </div>
  </div>

  <div class="ui-panel__footer">
    <button class="btn btn--action btn--small">使用</button>
    <button class="btn btn--black btn--small">丟棄</button>
  </div>
</div>
```

### 示例 2：商店面板

```html
<div class="ui-panel">
  <div class="ui-panel__header">
    <div class="ui-panel__title">魔法商店</div>
  </div>

  <div class="ui-panel__content">
    <!-- 物品網格 -->
    <div class="ui-grid ui-grid--4col">
      <div class="ui-slot">
        <div class="ui-slot__content">🔮</div>
        <div class="ui-slot__badge">$99</div>
      </div>
      <!-- ... -->
    </div>
  </div>

  <div class="ui-panel__footer">
    <button class="btn btn--action">購買</button>
  </div>
</div>
```

### 示例 3：角色屬性面板

```html
<div class="ui-panel ui-panel--fixed">
  <div class="ui-panel__header">
    <div class="ui-panel__title">角色屬性</div>
  </div>

  <div class="ui-panel__content">
    <div class="ui-value-box">生命值: <span>100/100</span></div>
    <div class="ui-value-box">魔法值: <span>50/50</span></div>
    <div class="ui-value-box highlight">等級: <span>25</span></div>
  </div>
</div>
```

---

## 主題切換

### 方法 1：全局主題切換

```css
/* 預設主題 */
:root {
  --theme-primary: #36b8d0;
  --theme-accent: #d0f000;
}

/* 深色主題 */
body.theme-dark {
  --theme-primary: #8b5a8c;
  --theme-accent: #d0a0d0;
}

/* 暖色主題 */
body.theme-warm {
  --theme-primary: #d97706;
  --theme-accent: #fbbf24;
}
```

**使用 JavaScript 切換：**
```javascript
document.body.classList.toggle('theme-dark');
```

### 方法 2：局部主題切換

```html
<div class="ui-panel" style="--theme-primary: #8b5a8c; --theme-accent: #d0a0d0;">
  <!-- 只有這個面板使用自訂主題 -->
</div>
```

### 方法 3：創建主題類別

```css
.ui-panel.theme-dark {
  --theme-primary: #8b5a8c;
  --theme-accent: #d0a0d0;
  /* 其他變數覆蓋... */
}

.ui-panel.theme-warm {
  --theme-primary: #d97706;
  --theme-accent: #fbbf24;
}
```

---

## 響應式設計

框架內建響應式支持：

### 平板設備（768px 以下）
- 網格從 16 列減少到 8 列
- 面板自動調整為全寬
- 控制條變為垂直堆疊

### 手機設備（480px 以下）
- 格子尺寸從 64px 縮小到 48px
- 網格為 4 列
- 字體大小減小
- 按鈕填充減少

**在你的代碼中使用：**
```css
@media (max-width: 768px) {
  :root {
    --size-slot-width: 56px;
  }
}

@media (max-width: 480px) {
  :root {
    --size-slot-width: 48px;
  }
}
```

---

## 遷移檢查表

如果你想從原有的 `.inventory` 類別遷移到新的 `.ui-` 前綴：

- [ ] 將所有 `.inventory` 改為 `.ui-panel`
- [ ] 將所有 `.inventory__nav` 改為 `.ui-panel__header`
- [ ] 將所有 `.inventory__tab-item` 改為 `.ui-tab`
- [ ] 將所有 `.inventory__grid` 改為 `.ui-grid`
- [ ] 將所有 `.inventory__slot` 改為 `.ui-slot`
- [ ] 將所有 `.capacity__count` 改為 `.ui-value-box`
- [ ] 更新 JavaScript 選擇器
- [ ] 測試所有交互功能
- [ ] 驗證響應式行為

---

## 擴展指南

### 添加新的按鈕變體

```css
.btn--gradient {
  background: linear-gradient(135deg, #36b8d0, #8b5a8c);
}

.btn--outline {
  background: transparent;
  border: 2px solid var(--theme-primary);
  color: var(--theme-primary);
}
```

### 添加新的面板主題

```css
.ui-panel.theme-neon {
  --theme-primary: #00ff88;
  --theme-accent: #ff00ff;
  --color-bg-panel: rgb(10, 20, 30);
}
```

### 創建自訂網格佈局

```css
.ui-grid--3col {
  grid-template-columns: repeat(3, 1fr);
}

.ui-grid--2col {
  grid-template-columns: repeat(2, 1fr);
}
```

---

## 常見問題

**Q: 如何改變格子的大小？**
A: 修改 `--size-slot-width` 變數：
```css
:root {
  --size-slot-width: 80px;  /* 從 64px 改為 80px */
}
```

**Q: 如何讓面板全寬？**
A: 使用 `.ui-panel--fullwidth` 類別或設置 CSS：
```css
.my-panel {
  width: 100%;
}
```

**Q: 如何禁用格子的懸停效果？**
A: 添加自訂類別：
```css
.ui-slot.no-hover:hover {
  filter: none;
  transform: none;
}
```

**Q: 如何在格子內放置自訂內容？**
A: 使用 `.ui-slot__content` div：
```html
<div class="ui-slot">
  <div class="ui-slot__content">
    <img src="item.png" alt="">
  </div>
  <div class="ui-slot__badge">5</div>
</div>
```

---

## 總結

這套遊戲 UI 框架提供了：

✅ **模組化設計** - 易於複用和維護
✅ **主題系統** - 快速切換色彩方案
✅ **響應式佈局** - 適應所有設備
✅ **豐富組件** - 覆蓋常見遊戲 UI 需求
✅ **無依賴** - 純 CSS/SCSS，無需框架
✅ **可擴展** - 輕鬆添加新組件

祝你使用愉快！🎮
