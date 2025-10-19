import { ConfigProvider } from './context/ConfigContext';
import FontLoader from './components/FontLoader';
import EditorPanel from './components/EditorPanel';
import LayoutSwitcher from './components/LayoutSwitcher';
import PreviewComponent from './components/PreviewComponent';

export default function App() {
  return (
    <ConfigProvider>
      <FontLoader />
      <div className="flex h-screen">
        {/* Left Sidebar - Editor Panel */}
        <div className="w-80 bg-white border-r overflow-y-auto p-6">
          <h1 className="text-2xl font-bold mb-6">UI Configurator</h1>
          <LayoutSwitcher />
          <EditorPanel />
        </div>

        {/* Right Side - Preview */}
        <div className="flex-1 overflow-auto">
          <PreviewComponent />
        </div>
      </div>
    </ConfigProvider>
  );
}