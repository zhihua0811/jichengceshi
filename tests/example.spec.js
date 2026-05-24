const path = require('path');
const { test, expect } = require('@playwright/test');

test('验证网站标题和按钮点击功能', async ({ page }) => {
  // 自动获取 index.html 的绝对路径（无论在 Windows 还是 Linux）
  const filePath = path.join(__dirname, '../index.html');
  // 转换为 file:// 协议可用的格式（Windows 需要将反斜杠转成正斜杠）
  const url = 'file://' + filePath.replace(/\\/g, '/');
  await page.goto(url);

  await expect(page).toHaveTitle('我的Playwright演示站点');
  await page.click('#clickMeBtn');
  await expect(page.locator('#message')).toHaveText('按钮被点击了！');
});