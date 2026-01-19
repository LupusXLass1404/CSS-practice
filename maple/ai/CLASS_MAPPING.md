// ============================================
// 遊戲 UI 框架 - 類別命名映射參考表
// ============================================
// 完整的從原始類別到新類別的對應關係

/**
 * 核心容器映射
 */

// 原始: .inventory
// 新增: .ui-panel
// 用途: 主容器，所有遊戲 UI 的基礎
// 示例:
// <div class="ui-panel">...</div>
// <div class="ui-panel ui-panel--fullwidth">...</div>
// <div class="ui-panel ui-panel--fixed">...</div>

// 原始: .inventory (without modifiers)
// 新增: .ui-panel (with variants)
// 變體:
//   - .ui-panel--fullwidth  /* 100% 寬度 */
//   - .ui-panel--fixed      /* 固定 400px */
//   - .ui-panel--centered   /* 居中 */

/**
 * 面板結構映射
 */

// 原始: .inventory__nav
// 新增: .ui-panel__header
// 用途: 面板頂部，包含標題和分頁
// 示例:
// <div class="ui-panel__header">
//   <div class="ui-panel__title">標題</div>
//   <div class="ui-tabs">...</div>
// </div>

// 原始: .inventory__title
// 新增: .ui-panel__title
// 用途: 面板標題文字

// 新增: .ui-panel__title-secondary
// 用途: 副標題 (新增組件)

// 原始: .inventory__container
// 新增: .ui-panel__content
// 用途: 內容容器

// 原始: .inventory__main
// 新增: .ui-panel__body
// 用途: 主要內容區域

// 新增: .ui-panel__footer
// 用途: 面板底部操作區 (新增組件)

/**
 * 分頁組件映射
 */

// 原始: .inventory__tabs
// 新增: .ui-tabs
// 用途: 標籤容器
// 示例:
// <div class="ui-tabs">
//   <div class="ui-tab active">標籤1</div>
//   <div class="ui-tab">標籤2</div>
// </div>

// 原始: .inventory__tab-item
// 新增: .ui-tab
// 用途: 單一標籤
// 狀態:
//   - .active /* 當前標籤 */

/**
 * 按鈕組件映射 (變更不大)
 */

// 原始: .btn
// 新增: .btn
// 用途: 基本按鈕 (保留相同名稱)
// 變體:
//   - .btn--action   /* 操作按鈕 */
//   - .btn--black    /* 黑色按鈕 */
//   - .btn--disabled /* 停用 */
//   - .btn--small    /* 小尺寸 */
//   - .btn--large    /* 大尺寸 */

/**
 * 格子和網格映射
 */

// 原始: .inventory__grid
// 新增: .ui-grid
// 用途: 網格容器
// 變體:
//   - .ui-grid--fixed       /* 16 列固定 */
//   - .ui-grid--4col        /* 4 列 */
//   - .ui-grid--fullwidth   /* 全寬自適應 */
// 示例:
// <div class="ui-grid ui-grid--fixed">
//   <div class="ui-slot">...</div>
// </div>

// 原始: .inventory__slot
// 新增: .ui-slot
// 用途: 物品格子/位置
// 狀態:
//   - .active   /* 選中/激活 */
//   - .selected /* 被選擇 */
//   - .empty    /* 空格子 */
//   - .disabled /* 禁用 */
// 子元素:
//   - .ui-slot__content  /* 格子內容 */
//   - .ui-slot__text     /* 格子文字 */
//   - .ui-slot__badge    /* 數量徽章 */

// 原始: .inventory__slot-text
// 新增: .ui-slot__text
// 用途: 格子內的文字

// 新增: .ui-slot__badge
// 用途: 格子數量/標籤 (新增組件)

/**
 * 控制條和數值映射
 */

// 原始: .inventory__controls
// 新增: .ui-control-bar
// 用途: 控制條容器
// 子組件:
//   - .ui-control-bar__left
//   - .ui-control-bar__right

// 原始: .capacity__count
// 新增: .ui-value-box
// 用途: 數值顯示框 (容量、重量等)
// 變體:
//   - .highlight /* 強調顯示 */
// 示例:
// <div class="ui-value-box">容量: <span>42/64</span></div>

// 新增: .ui-status-bar
// 用途: 狀態條 (金幣、積分等)
// 子元素:
//   - .ui-status-bar__icon        /* 圖標 */
//   - .ui-status-bar__icon--gold  /* 金幣圖標 */
//   - .ui-status-bar__icon--point /* 點數圖標 */
//   - .ui-status-bar__value       /* 數值 */
//   - .ui-status-bar__label       /* 標籤 */

/**
 * 搜尋和工具映射
 */

// 原始: .inventory__search-bar
// 新增: .ui-search-bar
// 用途: 搜尋容器

// 原始: .inventory__search-input
// 新增: .ui-search-input
// 用途: 搜尋輸入框

// 原始: .search-icon
// 新增: .ui-search-icon
// 用途: 搜尋圖標

// 原始: .inventory__utility
// 新增: .ui-panel__footer 或 .ui-action-group
// 用途: 底部工具區

// 新增: .ui-action-group
// 用途: 操作按鈕組 (新增組件)
// 變體:
//   - .ui-action-group--left
//   - .ui-action-group--center
//   - .ui-action-group--right

/**
 * Utility Classes (工具類別)
 */

// .u-pill                    /* 膠囊形狀 */
// .u-round                   /* 圓角 */
// .u-compact-round           /* 緊湊圓角 */
// .u-inner-shadow            /* 內凹陰影 */
// .u-inner-shadow--light     /* 輕微內凹陰影 */
// .u-inner-shadow--deep      /* 深層內凹陰影 */
// .u-shadow-button           /* 按鈕陰影 */
// .u-shadow-frame            /* 框線陰影 */
// .u-shadow-grid             /* 網格陰影 */
// .u-shadow-border-bottom    /* 底部邊線 */
// .u-shadow-shine-top        /* 頂部光澤 */
// .u-shadow-glow             /* 發光陰影 */
// .ui-icon                   /* 圖標樣式 */

/**
 * CSS 變數映射
 */

// 顏色變數
--theme-primary                    /* #36b8d0 - 主操作色 */
--theme-secondary                  /* #6b7785 - 次背景色 */
--theme-dark                       /* #313a43 - 深背景色 */
--theme-light                      /* #d0d4d7 - 淺背景色 */
--theme-accent                     /* #d0f000 - 強調色 */

--color-border-primary             /* 主邊框色 */
--color-border-light               /* 淺邊框色 */
--color-border-action              /* 操作邊框色 */

--color-text-primary               /* 主文字色 */
--color-text-secondary             /* 次文字色 */
--color-text-title                 /* 標題色 */

--color-bg-panel                   /* 面板背景 */
--color-bg-tab                     /* 標籤背景 */
--color-bg-tab-active              /* 激活標籤背景 */
--color-bg-slot                    /* 格子背景 */
--color-bg-slot-active             /* 激活格子背景 */

// 尺寸變數
--size-spacing-xs                  /* 0.125rem - 超小間距 */
--size-spacing-sm                  /* 0.5rem - 小間距 */
--size-spacing-md                  /* 1rem - 中間距 */
--size-spacing-lg                  /* 0.75rem - 大間距 */

--size-padding-horizontal          /* 1rem - 水平填充 */
--size-padding-vertical            /* 1rem - 垂直填充 */
--size-padding-compact             /* 0.625rem - 緊湊填充 */

--size-gap-small                   /* 0.5rem - 小間隙 */
--size-gap-medium                  /* 8px - 中間隙 */

--size-border-radius-pill          /* 50rem - 膠囊圓角 */
--size-border-radius-default       /* 8px - 默認圓角 */

--size-slot-width                  /* 64px - 格子寬度 */
--size-slot-gap                    /* 8px - 格子間隙 */

--size-panel-min-width             /* 320px - 面板最小寬 */
--size-panel-max-width             /* none - 面板最大寬 */

/**
 * 快速遷移指南
 */

// 查找和替換清單:

// 1. 容器級別
  // .inventory                 → .ui-panel
  // .inventory--fullwidth      → .ui-panel--fullwidth
  // .inventory--fixed          → .ui-panel--fixed

// 2. 結構級別
  // .inventory__nav            → .ui-panel__header
  // .inventory__title          → .ui-panel__title
  // .inventory__tabs           → .ui-tabs
  // .inventory__tab-item       → .ui-tab
  // .inventory__tab-item.action → .ui-tab.active
  // .inventory__container      → .ui-panel__content
  // .inventory__main           → .ui-panel__body
  // .inventory__utility        → .ui-panel__footer

// 3. 網格和格子
  // .inventory__grid           → .ui-grid
  // .inventory__slot           → .ui-slot
  // .inventory__slot-text      → .ui-slot__text
  // .inventory__slot.action    → .ui-slot.active

// 4. 控制和數值
  // .inventory__controls       → .ui-control-bar
  // .inventory__controls-left  → .ui-control-bar__left
  // .inventory__controls-right → .ui-control-bar__right
  // .capacity__count           → .ui-value-box
  // .capacity__count span      → .ui-value-box span

// 5. 金幣和狀態
  // .inventory__currency-bar   → .ui-status-bar
  // .inventory__currency-icon  → .ui-status-bar__icon
  // .inventory__currency-icon.money → .ui-status-bar__icon--gold
  // .inventory__currency-icon.point → .ui-status-bar__icon--point

// 6. 搜尋
  // .inventory__search-bar     → .ui-search-bar
  // .inventory__search-input   → .ui-search-input
  // .search-icon               → .ui-search-icon

/**
 * 新增組件 (沒有原始對應)
 */

// .ui-value-box              /* 數值顯示 */
// .ui-status-bar             /* 狀態條 */
// .ui-action-group           /* 操作組 */
// .ui-slot__badge            /* 格子徽章 */
// .ui-slot__content          /* 格子內容容器 */
// .ui-panel__title-secondary /* 副標題 */
// .ui-panel__footer          /* 面板底部 */

/**
 * 使用建議
 */

// 1. 保持向後相容性 (可選)
// 如果需要支援舊代碼，可建立別名：
// .inventory { @extend .ui-panel; }
// .inventory__grid { @extend .ui-grid; }

// 2. 漸進式遷移
// - 第一步：新組件使用 .ui-* 命名
// - 第二步：逐步替換舊組件
// - 第三步：完全移除 .inventory 類別

// 3. 團隊溝通
// - 分享這份參考表
// - 建立編碼規範
// - 定期檢查類別使用

/**
 * 完整示例對比
 */

// 原始 HTML:
// <div class="inventory">
//   <div class="inventory__nav">
//     <div class="inventory__title">物品欄</div>
//     <div class="inventory__tabs">
//       <div class="inventory__tab-item action">所有</div>
//     </div>
//   </div>
//   <div class="inventory__grid">
//     <div class="inventory__slot active">
//       <div class="inventory__slot-text">5</div>
//     </div>
//   </div>
// </div>

// 新增 HTML:
// <div class="ui-panel">
//   <div class="ui-panel__header">
//     <div class="ui-panel__title">物品欄</div>
//     <div class="ui-tabs">
//       <div class="ui-tab active">所有</div>
//     </div>
//   </div>
//   <div class="ui-grid">
//     <div class="ui-slot active">
//       <div class="ui-slot__text">5</div>
//     </div>
//   </div>
// </div>
