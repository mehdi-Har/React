export const DIF = () => {
    const currentDate = new Date();
    
    
    const day = currentDate.getDate(); // obtenir le jour
    const month = currentDate.toLocaleString('default', { month: 'long' }); //obtenir le mois en forme de chaine de caractére
    const year = currentDate.getFullYear();//obtenir l'année
  
    return (
      <div>
        <span>&copy; Mehdi Harim {day} {month} {year}</span>
      </div>
    );
  };