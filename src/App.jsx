import { createContext, useState } from "react";
import "./App.css";
import ProjectTable from "./Components/ProjectTable";
import ProjectHeader from "./Components/ProjectHeader";

// const DataContext = createContext();
// const projects = [
//   {
//     _id: 1,
//     title: "طراحی اپلیکیشن سفر آنلاین",
//     description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
//     status: "CLOSED",
//     category: {
//       id: 1,
//       title: "طراحی UI/UX",
//       englishTitle: "design-ui/ux",
//     },
//     budget: 10000,
//     tags: ["Ui/UX", "Figma"],
//     deadline: "2023-12-23T12:55:48.740Z",
//     createdAt: "2023-10-23T18:18:55.636Z",
//     updatedAt: "2024-06-02T13:37:48.468Z",
//   },
//   {
//     _id: 2,
//     title: "توسعه سایت فروشگاهی",
//     description: "یک سایت فروشگاهی کامل با پنل ادمین",
//     status: "OPEN",
//     category: {
//       id: 2,
//       title: "برنامه نویسی وب",
//       englishTitle: "web development",
//     },
//     budget: 50000,
//     tags: ["React", "Nodejs", "online shop"],
//     deadline: "2023-12-23T12:55:48.740Z",
//     createdAt: "2023-10-23T18:18:55.636Z",
//     updatedAt: "2024-06-02T13:37:48.468Z",
//   },
//   //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
// ];

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 3,
    title: "سیستم مدیریت پروژه",
    description: "ایجاد یک سیستم مدیریت پروژه برای تیم‌های کوچک و متوسط",
    status: "OPEN",
    category: {
      id: 3,
      title: "توسعه نرم افزار",
      englishTitle: "software development",
    },
    budget: 30000,
    tags: ["Agile", "Scrum", "Management"],
    deadline: "2024-01-15T10:30:00.000Z",
    createdAt: "2023-11-01T14:20:00.000Z",
    updatedAt: "2024-01-01T09:45:00.000Z",
  },
  {
    _id: 4,
    title: "اپلیکیشن آموزش زبان",
    description: "طراحی و توسعه اپلیکیشن موبایل برای یادگیری زبان‌های خارجی",
    status: "CLOSED",
    category: {
      id: 4,
      title: "برنامه نویسی موبایل",
      englishTitle: "mobile development",
    },
    budget: 40000,
    tags: ["Flutter", "Dart", "Education"],
    deadline: "2024-02-20T16:45:00.000Z",
    createdAt: "2023-10-25T11:25:00.000Z",
    updatedAt: "2024-01-30T14:00:00.000Z",
  },
  {
    _id: 5,
    title: "بهینه سازی موتور جستجو",
    description: "بهینه سازی SEO سایت برای رتبه‌بندی بهتر در موتورهای جستجو",
    status: "OPEN",
    category: {
      id: 5,
      title: "دیجیتال مارکتینگ",
      englishTitle: "digital marketing",
    },
    budget: 15000,
    tags: ["SEO", "Marketing", "Optimization"],
    deadline: "2024-03-01T18:00:00.000Z",
    createdAt: "2023-12-01T10:00:00.000Z",
    updatedAt: "2024-02-01T15:00:00.000Z",
  },
  {
    _id: 6,
    title: "پلتفرم ورزش آنلاین",
    description: "توسعه یک پلتفرم برای تمرینات ورزشی آنلاین و مربیگری",
    status: "OPEN",
    category: {
      id: 6,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 60000,
    tags: ["React", "Nodejs", "Fitness"],
    deadline: "2024-03-30T12:00:00.000Z",
    createdAt: "2023-10-30T12:00:00.000Z",
    updatedAt: "2024-02-15T12:00:00.000Z",
  },
  {
    _id: 7,
    title: "برنامه حسابداری شخصی",
    description: "ایجاد نرم‌افزاری برای مدیریت هزینه‌ها و درآمد شخصی",
    status: "CLOSED",
    category: {
      id: 7,
      title: "توسعه نرم افزار",
      englishTitle: "software development",
    },
    budget: 20000,
    tags: ["Accounting", "Finance", "Personal"],
    deadline: "2024-01-10T14:30:00.000Z",
    createdAt: "2023-09-20T12:00:00.000Z",
    updatedAt: "2024-01-09T18:00:00.000Z",
  },
];

function App() {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState("all");

  const handleBtn = () => {
    setShow((prev) => !prev);
  };

  const filterItems = projects.filter((item) => {
    const matchFilter = filter === "all" || item.status === filter;
    return matchFilter;
  });

  return (
    <>
      <h1 className="text-3xl"> React Live Code. #1</h1>
      <button
        className="bg-blue-700 text-white p-4 ring-blue-700 rounded"
        onClick={() => handleBtn()}
      >
        {show ? "Hide List" : "Show List"}
      </button>

      {show && (
        <>
          <ProjectHeader onFilter={setFilter}></ProjectHeader>
          <ProjectTable
            key={projects._id}
            projects={filterItems}
          ></ProjectTable>
        </>
      )}
    </>
  );
}

export default App;
