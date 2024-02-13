'use strict';
const e = React.createElement;

function EditableTable() {
  const [data, setData] = React.useState([
    { data: "Onboarding Call", week: ''},
    { data: "Google Search Console Access", week: ''},
    { data: "Google Analytics Access", week: ''},
    { data: "Website Access", week: ''},
    { data: "Technical Audit", week: ''},
    { data: "Anchor Text and Semantic Analysis", week: ''},
    { data: "Competitor Analysis", week: ''},
    { data: "Google Data Studio Report + Local Reporting Suite", week: ''},
    { data: "Site Laval Optimization", week: ''},
    { data: "On Page Optimization", week: ''},
    { data: "Content Creation", week: ''},
    { data: "Content Publishing", week: ''},
    { data: "Premium press Release", week: ''},
    { data: "Authority Niche Placements", week: ''},
    { data: "Review Managment", week: ''},
    { data: "Index Links", week: ''},
    { data: "Video Recap", week: ''},
    
    // Add more data as needed
  ]);
  React.useEffect(()=>{
    const updateData = async () =>{
    try {
        const response = await fetch('https://localhost:3001/updatedata', {
          method: 'POST',
          body: JSON.stringify(data),
        });
        
        console.log(response);
        
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
    updateData();
  },[data]);


  const handleEdit = (data, field, value) => {
    // Update the state with the edited data
    setData(prevData =>
      prevData.map(item =>
        item.data === data ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    e('table', { border: '1' },
      e('thead', null,
        e('tr', null,
          e('th', null, 'MONTH 1'),
          e('th', null, '')
        )
      ),
      e('tbody', null,
        data.map(item => (
          e('tr', { key: item.data },
            e('td', null, item.data),
            e('td', {
              contentEditable: 'true',
              onBlur: (e) => handleEdit(item.data, 'week', e.target.innerText)
            }, item.week),
            
          )
        ))
      )
    )
  );
}

// Render the React component into the root div
const domContainer = document.getElementById('root');
ReactDOM.render(e(EditableTable), domContainer);