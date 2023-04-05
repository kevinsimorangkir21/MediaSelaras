const months = [
  "",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const Date = (date: any) => {
  const blogDate = date.split("-");
  const tanggal = parseInt(blogDate[2]);
  let bulan = blogDate[1];
  const tahun = parseInt(blogDate[0]);
  bulan = months[parseInt(bulan)];
  date = `${tanggal} ${bulan} ${tahun}`;
  return date;
};
