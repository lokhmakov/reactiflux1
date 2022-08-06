const Page = () => null;
export default Page;

const WEEK = 604800000;

const gerRecDates = (length = 0, initialDate, make) => {
  const timestamp = initialDate.getTime();
  return Array.from({ length }, (_, i) => ({
    ...make(),
    start: new Date(timestamp + WEEK * i),
  }));
};

const initialDate = new Date("2022-08-10T10:00:00.147Z");
console.log(
  `gerRecDates`,
  gerRecDates(3, initialDate, () => ({ a: 1, b: 2, checked: false }))
);

// source
const gerRecDates1 = (val) => {
  const options = [];
  let startDate = new Date("2022-08-10T10:00:00.147Z");
  options.push({
    a: 1,
    b: 2,
    checked: false,
    start: new Date("2022-08-10T10:00:00.147Z"),
  });

  for (let i = 1; i <= (val || 0); i++) {
    console.log("iiii", i);
    options.push({
      a: 1,
      b: 2,
      checked: false,
      start: startDate,
    });
    startDate = new Date(startDate.setDate(startDate.getDate() + 7));
  }

  return options;
};
