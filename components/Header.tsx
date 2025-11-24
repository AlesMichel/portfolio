export default function Header() {
    return (
        <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold shadow-lg">
                    AM
                </div>
                <div>
                    <div className="text-sm opacity-70">Aleš / PHP dev</div>
                    <div className="text-lg font-semibold">Aleš Michel</div>
                </div>
            </div>
        </header>
    );
}
