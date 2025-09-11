// SkeletonRow.jsx
export default function SkeletonDoc() {
    return (
        <div className="rounded-[16px] overflow-x-auto p-0 mt-6">
        {/* Header */}
        <div className="grid grid-cols-6 font-[400] bg-gray-50 py-4 px-2 rounded-[10px] text-[14px] text-gray-700">
        <div className="pl-2">Document Title</div>
        <div>Category</div>
        <div>Date Modified</div>
        <div>State Uploaded For</div>
       
        <div>Files</div>
        <div>Action</div>
      </div>
  
        {/* Skeleton Rows */}
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 items-center px-4 py-4 border-b last:border-0 animate-pulse"
          >
            {/* Tenant Name */}
            <div className="flex items-center gap-2 min-w-[150px]">
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
            
          </div>
        ))}
      </div>
    );
  }
  