/**
 * ============================================================================
 * SCSS 框架使用示例和遷移指南
 * ============================================================================
 * 
 * 本文檔提供實踐示例，說明如何使用新的 SCSS 框架以及如何從舊版本遷移
 */

/* ============================================================================
   1. Mixin 使用示例
   ============================================================================ */

/**
 * 示例 1：使用 @mixin glass-panel
 * 
 * 場景：你想創建一個新的面板組件
 * 
 * SCSS 代碼：
 * 
 *   .custom-panel {
 *       @include glass-panel;
 *       padding: $spacing-lg;
 *       margin-bottom: $spacing-md;
 *   }
 * 
 * 編譯成：
 * 
 *   .custom-panel {
 *       background-color: rgba(136, 180, 224, 0.15);
 *       box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
 *       padding: 1rem;
 *       margin-bottom: 0.75rem;
 *   }
 * 
 * 進階：自訂玻璃效果
 * 
 *   .dark-panel {
 *       @include glass-panel($bg-color: rgba(50, 50, 50, 0.9), $highlight: rgba(100, 100, 100, 0.5));
 *   }
 */

/**
 * 示例 2：使用 @mixin pill-shape
 * 
 * 場景：創建多種按鈕變體
 * 
 * SCSS 代碼：
 * 
 *   .btn-primary {
 *       @include pill-shape(
 *           $border-color: $color-border-button,
 *           $bg-color: $color-primary,
 *           $text-color: $color-text-light
 *       );
 *   }
 *   
 *   .btn-secondary {
 *       @include pill-shape(
 *           $border-color: $color-border-secondary,
 *           $bg-color: $color-secondary,
 *           $text-color: $color-text-primary
 *       );
 *   }
 * 
 * 好處：
 *   ✅ 統一的按鈕樣式（圓角、邊框、漸變）
 *   ✅ 只改參數，自動適應不同顏色
 *   ✅ 維護時只需改 mixin，所有按鈕自動更新
 */

/**
 * 示例 3：使用 @mixin flex-center
 * 
 * 場景：快速創建居中佈局
 * 
 * 常見用途：
 * 
 *   .header {
 *       @include flex-center(row, space-between, center);
 *       // 自動生成：
 *       // display: flex;
 *       // flex-direction: row;
 *       // justify-content: space-between;
 *       // align-items: center;
 *   }
 *   
 *   .modal-center {
 *       @include flex-center(column, center, center);
 *       // 垂直居中對齐
 *   }
 *   
 *   .list-stack {
 *       @include flex-center(column, flex-start, stretch);
 *       // 垂直堆疊，拉伸寬度
 *   }
 * 
 * 一個 mixin 調用 = 4 行 CSS
 */

/**
 * 示例 4：使用 @mixin interactive-state
 * 
 * 場景：添加互動效果
 * 
 * SCSS 代碼：
 * 
 *   .clickable-item {
 *       @include interactive-state(brightness(1.1), scale(0.98));
 *   }
 * 
 * 自動生成的 CSS：
 * 
 *   .clickable-item {
 *       transition: all 0.1s ease-in-out;
 *   }
 *   
 *   .clickable-item:hover {
 *       filter: brightness(1.1);
 *   }
 *   
 *   .clickable-item:active {
 *       transform: scale(0.98);
 *   }
 * 
 * 節省的代碼：3 行代碼變 1 行調用
 */

/* ============================================================================
   2. 變數使用示例
   ============================================================================ */

/**
 * 示例 5：使用設計 token 變數
 * 
 * 場景：創建一個顯示用戶資訊的組件
 * 
 * SCSS 代碼：
 * 
 *   .user-card {
 *       background-color: $color-bg-panel;
 *       border: 1px solid $color-border-primary;
 *       border-radius: $radius-md;
 *       padding: $padding-md;
 *       
 *       &__name {
 *           font-size: 18px;
 *           color: $color-text-title;
 *           margin-bottom: $spacing-sm;
 *       }
 *       
 *       &__level {
 *           color: $color-text-secondary;
 *           font-size: 14px;
 *       }
 *       
 *       &__hp {
 *           color: $color-hp;
 *           font-weight: bold;
 *           margin-top: $spacing-md;
 *       }
 *   }
 * 
 * 優勢：
 *   ✅ 一致的設計 token：所有卡片使用相同的顏色和間距
 *   ✅ 易於維護：改變 $color-bg-panel，所有使用該變數的地方自動更新
 *   ✅ 主題支援：可輕鬆創建深色/淺色主題
 */

/**
 * 示例 6：變數計算
 * 
 * SCSS 可以進行數學計算！
 * 
 *   $base-size: 16px;
 *   $heading-1: $base-size * 2.5;      // 40px
 *   $heading-2: $base-size * 2;        // 32px
 *   $heading-3: $base-size * 1.5;      // 24px
 *   
 *   $padding-sm: 0.5rem;
 *   $padding-md: $padding-sm * 2;      // 1rem
 *   $padding-lg: $padding-sm * 3;      // 1.5rem
 * 
 * 計算顏色變數（使用 SCSS 函數）：
 * 
 *   $color-primary: #36b8d0;
 *   $color-primary-light: lighten($color-primary, 20%);
 *   $color-primary-dark: darken($color-primary, 20%);
 * 
 * 這確保顏色主題完全一致！
 */

/**
 * 示例 7：使用條件變數
 * 
 * SCSS 支援 if/else 邏輯！
 * 
 * 創建 theme-config.scss：
 * 
 *   $theme: 'dark';  // 或 'light'
 *   
 *   @if $theme == 'dark' {
 *       $color-bg-primary: #1a1a1a;
 *       $color-text-primary: #ffffff;
 *   } @else {
 *       $color-bg-primary: #ffffff;
 *       $color-text-primary: #000000;
 *   }
 * 
 * 然後在 ui-framework-professional.scss 的頂部：
 * 
 *   @import 'theme-config';
 * 
 * 這樣可以編譯不同的主題版本！
 */

/* ============================================================================
   3. 組件擴展示例
   ============================================================================ */

/**
 * 示例 8：擴展現有的按鈕組件
 * 
 * 原始按鈕樣式已包含在 ui-framework-professional.scss：
 * 
 *   .btn {
 *       @include pill-shape(...);
 *       @include interactive-state(...);
 *   }
 * 
 * 你可以在另一個檔案中擴展它：
 * 
 * my-buttons.scss:
 * 
 *   @import 'ui-framework-professional';
 *   
 *   .btn-icon {
 *       @extend .btn;
 *       display: inline-flex;
 *       gap: $gap-sm;
 *       
 *       &__icon {
 *           width: 20px;
 *           height: 20px;
 *       }
 *   }
 *   
 *   .btn-large {
 *       @extend .btn;
 *       padding: $padding-lg * 1.5;
 *       font-size: 18px;
 *   }
 * 
 * 或創建新的變體：
 * 
 *   .btn--success {
 *       @include pill-shape(
 *           $border-color: $color-border-success,
 *           $bg-color: $color-success,
 *           $text-color: white
 *       );
 *   }
 */

/**
 * 示例 9：創建新的 mixin
 * 
 * 假設你需要一個「漸變文字」效果
 * 
 * 在 ui-framework-professional.scss 或另一個檔案添加：
 * 
 *   @mixin gradient-title($from-color, $to-color) {
 *       background: linear-gradient(135deg, $from-color, $to-color);
 *       -webkit-background-clip: text;
 *       -webkit-text-fill-color: transparent;
 *       background-clip: text;
 *   }
 * 
 * 使用：
 * 
 *   .main-title {
 *       @include gradient-title($color-primary, $color-secondary);
 *       font-size: 32px;
 *       font-weight: bold;
 *   }
 */

/* ============================================================================
   4. 從舊版本遷移
   ============================================================================ */

/**
 * 遷移步驟 1：設置編譯環境
 * 
 * 如果還未安裝 Dart Sass：
 * 
 *   npm install -g sass
 * 
 * 或在項目中安裝：
 * 
 *   npm install --save-dev sass
 */

/**
 * 遷移步驟 2：備份舊版本
 * 
 *   cp style.css style.css.backup
 *   cp ui-framework.scss ui-framework.scss.backup
 * 
 * 保留備份以防需要回滾
 */

/**
 * 遷移步驟 3：開始使用新版本
 * 
 * 舊流程（不使用 SCSS）：
 *   編輯 CSS → 保存 → 重新整理瀏覽器
 * 
 * 新流程（使用 SCSS）：
 *   編輯 SCSS → 編譯 → 保存 CSS → 重新整理瀏覽器
 * 
 * 使用監視模式自動編譯：
 *   sass --watch ui-framework-professional.scss:ui-framework.css
 */

/**
 * 遷移步驟 4：更新 HTML 中的 CSS 引用
 * 
 * 舊 HTML：
 *   <link rel="stylesheet" href="style.css">
 * 
 * 新 HTML：
 *   <link rel="stylesheet" href="ui-framework.css">
 *   <!-- ui-framework.css 是由 ui-framework-professional.scss 編譯得到 -->
 */

/**
 * 遷移步驟 5：逐步適配組件
 * 
 * 舊代碼可能有類似：
 *   .inventory-item { ... }
 *   .inventory-item:hover { ... }
 *   .inventory-item.active { ... }
 * 
 * 新代碼應該是：
 *   .ui-slot {
 *       // 基礎樣式
 *       @include slot-base;
 *       
 *       &:hover { ... }    // ✅ 嵌套在內部
 *       &.active { ... }   // ✅ 嵌套在內部
 *   }
 */

/**
 * 遷移步驟 6：測試
 * 
 * [ ] 所有組件視觀正確
 * [ ] 互動效果正常（:hover, :active）
 * [ ] 響應式設計工作
 * [ ] 顏色和間距一致
 * [ ] 沒有樣式重複定義
 */

/* ============================================================================
   5. 常見遷移問題和解決方案
   ============================================================================ */

/**
 * 問題 1：編譯後 CSS 大小變大
 * 
 * 原因：新版本包含更多組件和功能
 * 
 * 解決方案：
 *   1. 只引入需要的組件
 *   2. 使用 CSS 最小化
 *      sass --style=compressed ui-framework-professional.scss
 *   3. 使用 CSS 清理工具移除未使用的代碼
 *      npm install -g uncss
 */

/**
 * 問題 2：變數名稱不同
 * 
 * 舊版本可能使用：
 *   --primary-color, --bg-color, --text-main
 * 
 * 新版本使用：
 *   $color-primary, $color-bg-panel, $color-text-title
 * 
 * 解決方案：
 *   在新檔案中創建映射：
 * 
 *   $primary-color: $color-primary;
 *   $bg-color: $color-bg-panel;
 *   $text-main: $color-text-title;
 * 
 *   這樣舊代碼可以繼續工作
 */

/**
 * 問題 3：Mixin 參數不確定
 * 
 * 如果不知道 mixin 接受哪些參數，檢查定義：
 * 
 *   @mixin glass-panel($bg-color: $color-bg-panel, $highlight: $color-highlight) { ... }
 *                      ^                            ^
 *                      參數 1                        參數 2
 *   
 *   // 使用默認值
 *   @include glass-panel;
 *   
 *   // 覆蓋某個參數
 *   @include glass-panel($bg-color: red);
 *   
 *   // 覆蓋所有參數
 *   @include glass-panel(blue, green);
 */

/**
 * 問題 4：巢狀層級太深
 * 
 * 不好的例子：
 *   .container {
 *       &__wrapper {
 *           &__item {
 *               &__content {
 *                   &__text { }
 *               }
 *           }
 *       }
 *   }
 * 
 * 應該拆分為：
 *   .container { ... }
 *   .item { ... }       // 獨立組件
 *   .content { ... }    // 獨立組件
 * 
 * 保持巢狀深度 ≤ 3 層，提高可讀性
 */

/* ============================================================================
   6. 性能最佳實踐
   ============================================================================ */

/**
 * 優化 1：使用 @extend 減少重複代碼
 * 
 * ❌ 不好：
 *   .btn-primary { ... 20 行 ... }
 *   .btn-secondary { ... 20 行（幾乎相同） ... }
 * 
 * ✅ 好：
 *   .btn { ... 20 行共同代碼 ... }
 *   .btn-primary { @extend .btn; /* 特定樣式 */ }
 *   .btn-secondary { @extend .btn; /* 特定樣式 */ }
 */

/**
 * 優化 2：使用局部變數減少重複
 * 
 * ❌ 不好：
 *   .component {
 *       box-shadow: 0 2px 4px rgba(0,0,0,0.1);
 *       color: $color-text-title;
 *       font-weight: bold;
 *   }
 *   
 *   .component__item {
 *       box-shadow: 0 2px 4px rgba(0,0,0,0.1);
 *       color: $color-text-title;
 *   }
 * 
 * ✅ 好：
 *   .component {
 *       $shadow: 0 2px 4px rgba(0,0,0,0.1);
 *       $color: $color-text-title;
 *       
 *       box-shadow: $shadow;
 *       color: $color;
 *       font-weight: bold;
 *       
 *       &__item {
 *           box-shadow: $shadow;
 *           color: $color;
 *       }
 *   }
 */

/**
 * 優化 3：編譯時最小化
 * 
 * 開發環境（便於調試）：
 *   sass --watch ui-framework-professional.scss:ui-framework.css --source-map
 * 
 * 生產環境（最小化大小）：
 *   sass --watch ui-framework-professional.scss:ui-framework.css --style=compressed
 * 
 * 大小對比：
 *   未壓縮：  15 KB
 *   壓縮後：  8 KB
 *   Gzip 後：  3 KB
 */

/* ============================================================================
   7. 檢查清單
   ============================================================================ */

/**
 * 遷移完成檢查清單：
 * 
 * [ ] 已備份舊版本
 * [ ] 已安裝 Sass 編譯工具
 * [ ] ui-framework-professional.scss 已準備好
 * [ ] 已設置編譯命令
 * [ ] 所有組件都轉換為新版本
 * [ ] HTML 中的 CSS 引用已更新
 * [ ] 所有樣式正確應用
 * [ ] 互動效果正常工作
 * [ ] 響應式設計無問題
 * [ ] 編譯後 CSS 大小合理
 * [ ] 沒有控制台錯誤
 * [ ] 跨瀏覽器測試通過
 */
