import { Box, Typography } from '@mui/material';
import { Form } from 'react-router-dom';

function MyAvatar({ contact, ...props }) {
  return (
    <Box sx={{ img: { borderRadius: '17px' } }} {...props}>
      <img src={contact.avatar || null} alt="" />
    </Box>
  );
}

export default function Contact() {
  const contact = {
    first: 'Your',
    last: 'Name',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'your_handle',
    notes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum non odio ut vestibulum. Nullam dignissim lacus sed mi luctus eleifend. Ut at neque eu augue euismod porta quis in sapien. Quisque molestie turpis ut leo vestibulum egestas. Nam feugiat, ante eget porttitor maximus, lorem sapien pulvinar augue, et dignissim sapien enim id mauris. Donec interdum felis sed tortor lobortis, eget viverra eros lacinia. Sed at turpis at ligula eleifend fringilla a non dui. Nam eu elit ullamcorper, consectetur metus non, sagittis tortor. Suspendisse ultrices neque pulvinar urna consectetur, id tempus libero porta. Aliquam a efficitur magna.

    Nulla non vehicula nibh. Proin vitae lobortis tortor, viverra sodales dui. Quisque a venenatis turpis. Curabitur quis nibh a tortor gravida tincidunt quis sit amet sapien. Praesent vitae convallis neque. Suspendisse consectetur maximus dui eu viverra. Vivamus pharetra lorem nec bibendum condimentum.
    
    Etiam laoreet nisi sem, in volutpat metus euismod scelerisque. Praesent nisl elit, placerat eu ultrices in, ornare quis magna. Nullam eget maximus leo, sit amet elementum ex. Suspendisse eleifend eget ligula et efficitur. Curabitur sed lectus eu turpis ultrices gravida suscipit sed erat. Pellentesque vulputate nibh non commodo ultricies. Aenean at euismod mi.
    
    Phasellus quis bibendum orci. Aliquam elementum ipsum nec nibh vestibulum varius. Nulla facilisi. Integer vulputate lacus in elit molestie, at dapibus ipsum pharetra. Morbi vel iaculis nunc. Mauris tristique lobortis mi, a sollicitudin leo efficitur a. Integer arcu sapien, pellentesque malesuada metus in, porta vehicula dui. Curabitur id nunc est. Nunc et vulputate est. Maecenas tempor felis vitae turpis vulputate, maximus semper tellus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque interdum sed elit non tincidunt. Donec tempor augue ac diam sagittis vehicula.
    
    Sed maximus, velit ac auctor sodales, justo elit convallis lectus, ut dignissim tortor libero in lorem. Suspendisse pulvinar, lacus vulputate efficitur condimentum, neque purus vehicula nulla, vitae mollis tortor metus et nulla. Cras venenatis a enim quis euismod. Quisque ac tellus et augue luctus venenatis eleifend in ex. Nunc vel luctus nulla. Aenean facilisis tellus eu leo ullamcorper, et congue tellus suscipit. Cras vehicula dui at sem tincidunt blandit vel sit amet nisi. Aenean laoreet ornare facilisis.`,
    favorite: true,
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <MyAvatar contact={contact} mx={2} />

      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h4">
            {contact.first || contact.last
              ? contact.first + ' ' + contact.last
              : 'No Name'}
          </Typography>
          <Favorite contact={contact} />
        </Box>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </Box>
    </Box>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </form>
  );
}
