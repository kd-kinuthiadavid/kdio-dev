function downloadResume() {
  // create a link
  const link = document.createElement("a");
  // assign a name to the doc
  link.download = "David-Kinuthia-Frontend-Engineer-CV";
  // make the link be opened in a new tab
  link.target = "_blank";
  // assign the google doc link
  link.href =
    "https://docs.google.com/document/d/1W0X6dQI7AAp6KqFp8rSwZRAXEfWlUakw5_FN_4xMDOQ/edit?usp=sharing";
  document.body.appendChild(link);
  // download the link
  link.click();
  document.body.removeChild(link);
}

export { downloadResume };
