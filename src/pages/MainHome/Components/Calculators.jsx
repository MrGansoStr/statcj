import { Container, ImageList, ImageListItem, Typography } from "@mui/material";

const itemData = [
  {
    img: '/images/Calculators/FrecuencyTable.JPG',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/Calculators/MCT.JPG',
    title: 'Burger',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/Calculators/ValueZ.JPG',
    title: 'Camera',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/Calculators/VarianceAndError.JPG',
    title: 'Camera',
    rows: 2,
    cols: 2,
  }

];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Calculators() {
  return (
    <Container maxWidth="md">
      <Typography className="d-flex align-items-center justify-content-center p-4" variant="h4">Calculadoras</Typography>
      <ImageList
        sx={{ height: 600 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
export default Calculators;