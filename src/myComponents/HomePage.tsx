import AppAreaChart from "./AppAreaChart";
import AppBarChart from "./AppBarChart";
import AppPieChart from "./AppPieChart";
import CardList from "./CardList";
import ToDoList from "./ToDoList";

export default function HomePage() {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
                <div className="bg-primary-foreground p-4 rounded-lg"><AppBarChart /></div>
                <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Latest Transactions" /></div>
                <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart /></div>
                <div className="bg-primary-foreground p-4 rounded-lg"><ToDoList /></div>
                <div className="bg-primary-foreground p-4 rounded-lg"><AppAreaChart /></div>
                <div className="bg-primary-foreground p-4 rounded-lg">Test</div>

                <div className="bg-primary-foreground p-4 rounded-lg"><AppBarChart /></div>
                <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
                <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart /></div>
                <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
                <div className="bg-primary-foreground p-4 rounded-lg"><AppAreaChart /></div>
                <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
            </div>
        </div>
    );
}