import BlockDeletedModal from "../../../components/app/block/BlockDeletedModal";
import BlockFilter from "../../../components/app/block/BlockFilter";
import BlockList from "../../../components/app/block/BlockList";


export default function Block() {
    return (
        <div className="bg-white rounded-[10px] p-6 space-y-6">
            <BlockFilter/>
            <BlockList/>
          
        </div>
    );
}