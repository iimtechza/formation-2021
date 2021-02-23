const Image = ({ url }) => (
  <div
    style={{
      background:
        'url("' + url
          ? url
          : "https://attorneygeneralchambers.com/files/images/placeholder.png" +
            '")'
    }}
    className=" flex flex-column h-100 w-100 f5 fw6 black bg-cover bg-center "
  />
);
export default Image;
