import CodeEditor from "@/components/CodeEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Compiler = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className=" rounded-lg border">
      <ResizablePanel
        defaultSize={50}
        className="flex h-[calc(100dvh-60px)] min-w-[350px]"
      >
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        defaultSize={50}
        className="flex h-[calc(100dvh-60px)] min-w-[350px]"
      >
        Right Side
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Compiler;
