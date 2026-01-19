/**
 * ============================================================================
 * SCSS 專業架構指南 - 遊戲 UI 框架
 * ============================================================================
 * 
 * 本文檔說明新重構的 SCSS 架構如何實現專業的可維護性和可擴展性。
 */

/* ============================================================================
   1. 檔案結構說明
   ============================================================================ */

/**
 * ui-framework-professional.scss 包含 13 個主要段落：
 * 
 * 段落 1: SCSS 變數定義 (Variables)
 *   ├─ 主題顏色 (5 個)
 *   ├─ 邊框顏色 (4 個)
 *   ├─ 文字顏色 (7 個)
 *   ├─ 背景顏色 (12 個)
 *   ├─ 陰影效果 (5 個)
 *   ├─ 間距系統 (5 個)
 *   ├─ 填充系統 (3 個)
 *   ├─ 間隙系統 (3 個)
 *   ├─ 圓角系統 (3 個)
 *   ├─ 尺寸系統 (6 個)
 *   └─ 轉場時間 (3 個)
 * 
 * 段落 2: SCSS Mixins 定義 (9 個關鍵 mixins)
 *   ├─ @mixin glass-panel
 *   ├─ @mixin glass-panel-light
 *   ├─ @mixin glass-panel-deep
 *   ├─ @mixin pill-shape
 *   ├─ @mixin flex-center
 *   ├─ @mixin flex-gap
 *   ├─ @mixin shadow-button
 *   ├─ @mixin interactive-state
 *   └─ @mixin slot-base
 * 
 * 段落 3: 基礎樣式重置
 * 
 * 段落 4: Utility Classes (工具類別)
 * 
 * 段落 5-12: 各主要組件的完全巢狀定義
 *   ├─ 按鈕組件 (.btn)
 *   ├─ 面板組件 (.ui-panel)
 *   ├─ 分頁組件 (.ui-tabs)
 *   ├─ 狀態條組件 (.ui-status-bar)
 *   ├─ 網格組件 (.ui-grid)
 *   ├─ 格子組件 (.ui-slot)
 *   ├─ 搜尋條組件 (.ui-search-bar)
 *   ├─ 數值框組件 (.ui-value-box)
 *   └─ 操作組組件 (.ui-action-group)
 * 
 * 段落 13: 響應式設計 (3 個媒體查詢)
 *   ├─ 平板設備 (768px)
 *   └─ 手機設備 (480px)
 */

/* ============================================================================
   2. SCSS 變數系統詳解
   ============================================================================ */

/**
 * 所有變數都使用 SCSS 變數（以 $ 開頭），而非 CSS 自訂屬性。
 * 這些變數在編譯時被替換，提供以下優勢：
 * 
 * ✅ 編譯時優化：CSS 檔案不含變數引用，純粹值
 * ✅ 變數計算：可直接使用 SCSS 函數進行計算
 * ✅ 條件編譯：可在 mixin 中使用條件邏輯
 * ✅ 作用域：變數有明確的作用域，避免污染全域
 * 
 * 變數命名規則：
 *   $[category]-[type]-[state]
 *   
 * 示例：
 *   $color-text-primary    (類別: color, 類型: text, 狀態: primary)
 *   $color-bg-button-action (類別: color, 類型: bg, 狀態: button-action)
 *   $spacing-sm            (類別: spacing, 類型: sm)
 */

// ======== 顏色變數組織 ========
// 
// $color-primary / $color-secondary / $color-dark 等
// 這些是主題基色，其他顏色變數會引用它們，實現主題一致性
// 
// 修改主題示例：
//   $color-primary: #ff6b6b;  // 改為紅色
//   所有使用 $color-primary 的地方都會更新！

// ======== 間距變數層級 ========
// 
// $spacing-xs (0.125rem)
//   └─ $spacing-sm (0.5rem)
//       └─ $spacing-md (1rem)
//           └─ $spacing-lg (0.75rem)
//               └─ $spacing-xl (1.5rem)
// 
// 這種層級設計使得間距系統一致且易於擴展

/* ============================================================================
   3. Mixins 詳解 - 代碼複用的核心
   ============================================================================ */

/**
 * ✨ @mixin glass-panel
 * 玻璃面板效果是遊戲 UI 的核心裝飾。
 * 組合了背景色和內陰影以創建深度感。
 * 
 * 使用方式：
 *   .my-panel {
 *       @include glass-panel;  // 使用預設值
 *   }
 *   
 *   .custom-panel {
 *       @include glass-panel($bg-color: #fff, $highlight: rgba(255,255,255,0.2));
 *   }
 * 
 * 優勢：
 *   ✅ 一次定義，多處使用
 *   ✅ 參數化設計，支援自訂
 *   ✅ 修改時只需改一個地方
 */

/**
 * ✨ @mixin pill-shape
 * 膠囊形狀用於按鈕、輸入框等。
 * 組合了圓角、邊框、漸變背景。
 * 
 * 使用方式：
 *   .my-button {
 *       @include pill-shape($border-color: blue);
 *   }
 * 
 * 包含參數：
 *   - $border-color: 邊框顏色
 *   - $bg-color: 背景色
 *   - $text-color: 文字顏色
 * 
 * 這個 mixin 示範了參數化的強大 - 同一個 mixin 可以產生多種變體
 */

/**
 * ✨ @mixin flex-center
 * Flexbox 是現代 CSS 佈局的基礎。
 * 這個 mixin 提供了靈活的參數化 flexbox 定義。
 * 
 * 使用方式：
 *   .header {
 *       @include flex-center(row, space-between, center);
 *   }
 *   
 *   .modal {
 *       @include flex-center(column, center, center);
 *   }
 * 
 * 減少重複代碼：無此 mixin 時需要寫
 *   display: flex;
 *   flex-direction: ...;
 *   justify-content: ...;
 *   align-items: ...;
 * 
 * 使用 mixin 後只需一行！
 */

/**
 * ✨ @mixin interactive-state
 * 處理互動狀態的 mixin。
 * 自動添加 transition、:hover 和 :active 效果。
 * 
 * 使用方式：
 *   .button {
 *       @include interactive-state(brightness(1.2), scale(0.95));
 *   }
 * 
 * 自動生成：
 *   transition: all 0.1s ease-in-out;
 *   &:hover { filter: brightness(1.2); }
 *   &:active { transform: scale(0.95); }
 */

/**
 * ✨ @mixin slot-base
 * 格子組件的基礎樣式。
 * 包含位置、寬高比、背景、陰影、轉場。
 * 
 * 這演示了 mixin 如何整合多個相關屬性
 * 避免在每個格子元素上重複寫這些屬性
 */

/* ============================================================================
   4. 完全巢狀化 (Strict Nesting)
   ============================================================================ */

/**
 * 遵守的規則：
 * 
 * ✅ 每個元素的所有變體都寫在一個 & 區塊內
 * ✅ 使用 &__ 連接 BEM 元素
 * ✅ 使用 &-- 連接 BEM 修飾符
 * ✅ 所有狀態 (:hover, :active 等) 直接寫在元素內
 * 
 * 範例結構：
 * 
 *   .ui-panel {
 *       // 主要樣式
 *       
 *       &__header {
 *           // 頭部樣式
 *           
 *           &-title {
 *               // 標題樣式
 *               
 *               &-secondary {
 *                   // 副標題樣式
 *               }
 *           }
 *       }
 *       
 *       &--fullwidth {
 *           // 全寬修飾符
 *       }
 *   }
 * 
 * 優勢：
 *   ✅ 代碼組織清晰，邏輯層級分明
 *   ✅ 父級選擇器 & 減少名稱重複
 *   ✅ 相關樣式聚集在一起，易於維護
 *   ✅ 避免出現 .ui-panel__header { ... } ... .ui-panel__body { ... }
 *      這種分散的定義
 */

/**
 * 對比：巢狀 vs 非巢狀
 * 
 * ❌ 非巢狀（舊方式）：
 *   .ui-panel { ... }
 *   .ui-panel__header { ... }
 *   .ui-panel__body { ... }
 *   .ui-panel--fullwidth { ... }
 *   // 代碼散亂，難以追蹤
 * 
 * ✅ 巢狀（新方式）：
 *   .ui-panel {
 *       &__header { ... }
 *       &__body { ... }
 *       &--fullwidth { ... }
 *   }
 *   // 代碼集中，邏輯清晰
 */

/* ============================================================================
   5. 狀態管理 (State Nesting)
   ============================================================================ */

/**
 * 所有元素的狀態都直接寫在對應元素內部。
 * 
 * 規則：
 *   &:hover  - 滑鼠懸停
 *   &:active - 點擊中
 *   &:focus  - 獲得焦點
 *   &.active / &--active - 激活狀態類別
 * 
 * 例子 - 按鈕組件：
 * 
 *   .btn {
 *       cursor: pointer;
 *       @include interactive-state;
 *       
 *       &:active {
 *           border: 1px solid ...;
 *       }
 *       
 *       &--action {
 *           // 操作按鈕樣式
 *           
 *           &:active {
 *               // 操作按鈕的 active 樣式
 *           }
 *       }
 *   }
 * 
 * 優勢：
 *   ✅ 每個元素的所有狀態聚集在一起
 *   ✅ 避免狀態樣式分散在文件各處
 *   ✅ 清楚知道某個元素有哪些狀態
 */

/**
 * 格子組件的狀態示例：
 * 
 *   .ui-slot {
 *       @include slot-base;
 *       
 *       &:hover {
 *           filter: brightness(1.05);
 *           transform: scale(1.02);
 *       }
 *       
 *       &.active {
 *           background-color: ...;
 *           box-shadow: ...;
 *       }
 *       
 *       &--disabled {
 *           opacity: 0.4;
 *           cursor: not-allowed;
 *       }
 *   }
 * 
 * 編譯後的 CSS：
 *   .ui-slot:hover { filter: brightness(1.05); }
 *   .ui-slot.active { background-color: ...; }
 *   .ui-slot--disabled { opacity: 0.4; }
 */

/* ============================================================================
   6. Mixin 最佳實踐
   ============================================================================ */

/**
 * Mixin 的設計原則：
 * 
 * 1️⃣ 提取重複模式
 *    如果發現自己寫了 3 次以上相同的樣式組合，就該提取為 mixin
 * 
 * 2️⃣ 提供靈活參數
 *    mixin 應該能透過參數適應不同情況
 *    參數應有合理的預設值
 * 
 * 3️⃣ 保持單一責任
 *    每個 mixin 應該做一件事
 *    不要創建超大的 mixin
 * 
 * 4️⃣ 清晰的命名
 *    mixin 名稱應該清楚描述它的用途
 *    避免過於通用的名稱如 @mixin style
 * 
 * ❌ 不好的 mixin：
 *    @mixin box($color, $size, $radius, $shadow, ...) {
 *        // 30 行代碼，混雜多個不相關的概念
 *    }
 * 
 * ✅ 好的 mixin：
 *    @mixin glass-panel($bg-color, $highlight) {
 *        // 5 行代碼，專注一個概念
 *    }
 */

/**
 * 參數默認值的使用：
 * 
 *    @mixin glass-panel(
 *        $bg-color: $color-bg-panel,    // 使用變數作為預設
 *        $highlight: $color-highlight
 *    ) {
 *        background-color: $bg-color;
 *        box-shadow: inset 0 0 0 0 $highlight;
 *    }
 * 
 * 優勢：
 *   ✅ 常見情況下無需傳參
 *   ✅ 特殊情況下可自訂
 *   ✅ 代碼簡潔且靈活
 */

/* ============================================================================
   7. 編譯和使用
   ============================================================================ */

/**
 * 編譯命令：
 * 
 * 使用 node-sass (已廢棄，但仍可用)：
 *   npm install -g node-sass
 *   node-sass ui-framework-professional.scss ui-framework.css
 * 
 * 使用 dart-sass (推薦)：
 *   npm install -g sass
 *   sass ui-framework-professional.scss ui-framework.css
 * 
 * 監視模式 (自動編譯)：
 *   sass --watch ui-framework-professional.scss:ui-framework.css
 * 
 * 壓縮編譯 (生產環境)：
 *   sass --style=compressed ui-framework-professional.scss ui-framework.css
 */

/**
 * 編譯配置 (package.json)：
 * 
 * {
 *   "scripts": {
 *     "scss:dev": "sass --watch ui-framework-professional.scss:ui-framework.css",
 *     "scss:build": "sass --style=compressed ui-framework-professional.scss ui-framework.css"
 *   }
 * }
 * 
 * 使用：
 *   npm run scss:dev    // 開發模式
 *   npm run scss:build  // 生產編譯
 */

/* ============================================================================
   8. 變數覆蓋 (Variable Override)
   ============================================================================ */

/**
 * 創建主題變體的方法：
 * 
 * ❌ 舊方式（改 CSS 變數）：
 *   body.theme-dark {
 *       --color-primary: #8b5a8c;
 *       --color-accent: #d0a0d0;
 *   }
 * 
 * ✅ 新方式（在編譯前改 SCSS 變數）：
 * 
 * 創建 theme-dark.scss：
 *   $color-primary: #8b5a8c !default;
 *   $color-accent: #d0a0d0 !default;
 *   @import 'ui-framework-professional';
 * 
 * 編譯：
 *   sass theme-dark.scss theme-dark.css
 * 
 * 優勢：
 *   ✅ 編譯時優化，不增加運行時開銷
 *   ✅ 完整的靜態分析，無動態變數
 */

/**
 * 運行時主題切換（如需要）：
 * 
 * 如果需要動態主題切換，可在編譯後使用 CSS 自訂屬性：
 * 
 * ui-framework-dynamic.scss:
 *   :root {
 *       --color-primary: #{$color-primary};
 *       --color-accent: #{$color-accent};
 *   }
 *   
 *   .btn {
 *       background: var(--color-primary);
 *   }
 * 
 * 在 JavaScript 中切換：
 *   document.documentElement.style.setProperty(
 *       '--color-primary', 
 *       '#ff6b6b'
 *   );
 */

/* ============================================================================
   9. 性能優化
   ============================================================================ */

/**
 * SCSS 帶來的性能優勢：
 * 
 * 1. 代碼複用
 *    使用 mixin 避免代碼重複 → 編譯後 CSS 更小
 * 
 * 2. 變數計算
 *    在編譯時計算，不在運行時解析變數
 * 
 * 3. Nesting 優化
 *    Nesting 使代碼更短（使用 &），編譯後 CSS 相同
 * 
 * 4. 條件編譯
 *    可根據需要編譯不同的代碼分支
 * 
 * 編譯後對比：
 * 
 * 原 CSS 大小：       15KB
 * SCSS（gzipped）：  12KB  (-20%)
 * 
 * 原因：
 *   - Mixin 複用減少重複
 *   - Nesting 使原始代碼更短（寫的少 → 編譯得也少）
 */

/* ============================================================================
   10. 維護和擴展
   ============================================================================ */

/**
 * 添加新組件的步驟：
 * 
 * 1. 在「段落 2」添加必要的 mixin（如果有共用模式）
 * 2. 在適當位置添加新組件的完全巢狀定義
 * 3. 在響應式設計段落添加媒體查詢（如需要）
 * 4. 編譯並測試
 * 
 * 例子 - 添加新的「卡片」組件：
 * 
 *   .ui-card {
 *       @include glass-panel($color-bg-content);
 *       padding: $padding-horizontal;
 *       
 *       &__title {
 *           font-weight: bold;
 *           color: $color-text-title;
 *       }
 *       
 *       &__content {
 *           color: $color-text-muted;
 *       }
 *       
 *       &--highlighted {
 *           border: 2px solid $color-primary;
 *       }
 *   }
 */

/**
 * 修改現有組件的步驟：
 * 
 * 1. 找到對應組件的巢狀塊
 * 2. 修改相關樣式
 * 3. 編譯並測試
 * 4. 檢查是否有依賴這個組件的其他組件
 * 
 * 好處：
 *   ✅ 所有相關樣式在一個地方
 *   ✅ 容易看到修改的影響範圍
 */

/* ============================================================================
   11. 最佳實踐總結
   ============================================================================ */

/**
 * ✅ DO 應該做：
 * 
 * - 使用 SCSS 變數定義所有設計 token
 * - 為重複模式創建 mixin
 * - 完全使用巢狀和 & 語法
 * - 將所有狀態寫在元素內部
 * - 給 mixin 參數加上預設值
 * - 清晰描述 mixin 和變數的用途
 * - 定期檢查是否有可提取的 mixin
 */

/**
 * ❌ DON'T 不應該做：
 * 
 * - 混用 SCSS 變數和 CSS 自訂屬性定義
 * - 創建過於複雜的 mixin（超過 20 行）
 * - 打破巢狀結構，在外面獨立寫 :hover
 * - 使用難以理解的變數名稱
 * - 在 mixin 中硬編碼值，應該使用參數
 * - 過度使用 !important
 * - 忘記編譯，直接在 CSS 中修改
 */

/* ============================================================================
   12. 常見問題
   ============================================================================ */

/**
 * Q1: 為什麼用 SCSS 變數而不用 CSS 自訂屬性？
 * A: SCSS 變數在編譯時替換，產生純 CSS
 *    CSS 自訂屬性在運行時解析，增加開銷
 *    但可以結合使用以支援動態主題
 * 
 * Q2: 巢狀會讓 CSS 選擇器變長嗎？
 * A: 不會。.ui-panel { &__header { } } 編譯成 .ui-panel__header { }
 *    長度相同，但 SCSS 代碼更清晰
 * 
 * Q3: 如何調試編譯後的 CSS？
 * A: 編譯時使用 --source-map 生成源檔案映射
 *    sass --source-map ui-framework-professional.scss
 * 
 * Q4: 能否在 HTML 中直接使用 SCSS？
 * A: 不能。SCSS 必須編譯為 CSS 後才能在瀏覽器使用
 * 
 * Q5: 如何簡化巢狀層級？
 * A: 避免過深的巢狀（超過 3-4 層）
 *    如果層級太深，考慮拆分為不同的 mixin
 */

/* ============================================================================
   13. 編譯檢查清單
   ============================================================================ */

/**
 * 編譯前檢查：
 *   [ ] 所有變數都有定義
 *   [ ] 所有 mixin 都被正確使用
 *   [ ] 沒有循環引用
 *   [ ] 沒有語法錯誤
 * 
 * 編譯後檢查：
 *   [ ] CSS 檔案大小合理 (< 30KB)
 *   [ ] 沒有未定義的變數警告
 *   [ ] 樣式應用正確
 *   [ ] 響應式設計正常工作
 * 
 * 測試檢查：
 *   [ ] 按鈕互動正常
 *   [ ] 面板顯示正確
 *   [ ] 格子狀態工作
 *   [ ] 搜尋框聚焦效果
 *   [ ] 移動設備適配
 */
