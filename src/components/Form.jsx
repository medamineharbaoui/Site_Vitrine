import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../style";
import TextField from "@mui/material/TextField";

const MyForm = () => (
  <section
    className={` ${styles.marginY} ${styles.padding} sm: bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50%" },
      }}
    >
      <div>
        <h2 className={styles.paragraph}>
          Laissez nous vos coordonnées , on vous contactera !
        </h2>
        <br />
        <TextField
          sx={{ input: { color: "white" } }}
          id="outlined-required"
          label="Nom et Prénom"
        />
        <br />
        <TextField
          sx={{ input: { color: "white" } }}
          id="outlined-required"
          label="Nom de l'entreprise"
        />

        <br />
        <TextField
          sx={{ input: { color: "white" } }}
          required
          id="outlined-required"
          type="number"
          label="Numéro de téléphone"
        />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            sx={{ input: { color: "white" } }}
            id="outlined-required"
            label="E-mail"
          />
          <button
            type="button"
            className={`px-3 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          >
            Envoyer
          </button>
        </div>
      </div>
    </Box>
  </section>
);

export default MyForm;
