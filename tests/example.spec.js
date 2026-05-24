// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('验证网站标题和按钮点击功能', async ({ page }) => {
  // **页面交互**: 导航到你的HTML文件（注意替换成你的实际路径）
  // **重要**：路径写法 `file:///` 开头，将你`index.html`的实际绝对路径填入，例如 Windows 下：`file:///C:/Users/你的用户名/playwright-demo-project/index.html`
  await page.goto('file:///D:/playwright-demo-project/index.html');

  // **断言验证**: 检查页面标题是否符合预期
  await expect(page).toHaveTitle('我的Playwright演示站点');

  // **页面交互**: 点击页面上的按钮
  await page.click('#clickMeBtn');

  // **断言验证**: 验证点击按钮后，页面上显示的文字是否正确
  await expect(page.locator('#message')).toHaveText('按钮被点击了！');
});