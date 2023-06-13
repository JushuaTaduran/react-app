import EditEmployee from "./EditEmployee";

function Employee({ name, title, img, editEmployee }) {
  return (
    <div className="min-w-[350px] max-w-[350px] m-4 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover rouded-full h-[100px] w-[100px] block mx-auto rounded-full sm:mx-0 sm:shrink-0"
        src={img}
        alt="Profile"
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">{name}</p>
          <p className="font-medium text-slate-500">{title}</p>
        </div>
        {editEmployee}
      </div>
    </div>
  );
}

export default Employee;
