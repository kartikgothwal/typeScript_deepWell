//Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// const year = <HTMLElement | null>document.getElementById("year");
const year:HTMLElement | null = <HTMLElement | null>document.getElementById("year");
const thisYear: string = new Date().getFullYear().toString();
if (year) {
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
}
