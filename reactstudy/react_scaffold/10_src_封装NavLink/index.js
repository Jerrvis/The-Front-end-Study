// 18 版本api入口配置
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App'

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
<BrowserRouter>
<App/>
</BrowserRouter>);