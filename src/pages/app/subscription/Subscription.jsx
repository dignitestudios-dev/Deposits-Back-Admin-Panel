import SubscriptionFilter from "../../../components/app/subscription/SubscriptionFilter";
import SubscriptionList from "../../../components/app/subscription/SubscriptionList";

export default function Subscription() {
    return (
        <div className="bg-white rounded-[10px] p-6 space-y-6">
            <SubscriptionFilter/>
            <SubscriptionList/>
        </div>
    );
}