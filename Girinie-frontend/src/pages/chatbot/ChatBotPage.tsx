import Sidebar from "../child/components/ChildSidebar"

export default function ChatBotPage() {
  return (
    <div className="min-h-screen bg-primary">
        <header className="h-16 bg-white shadow" />
        <Sidebar/>

        <div className="ml-60 mt-2 relative max-w-7xl mx-auto bg-white p-4 overflow-hidden">
            <h3> 챗봇 </h3>
        </div>
        
        <main className="ml-60 p-10 max-w-7xl mx-auto">
    
        </main>
    </div>
  );
}
