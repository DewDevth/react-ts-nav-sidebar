export const formatDateToThailand = (date: Date): string => {
    // Create an instance of Intl.DateTimeFormat with Thailand time (ICT) and Thai locale
    const formatter = new Intl.DateTimeFormat("th-TH", {
      timeZone: "Asia/Bangkok",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  
    // Format the date using the formatter
    const formattedDate = formatter.format(date);
  
    // Return the formatted string
    return formattedDate;
  };
  