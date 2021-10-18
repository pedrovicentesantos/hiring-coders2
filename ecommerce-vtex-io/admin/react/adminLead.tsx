import React, { FC, useEffect, useState } from "react"
import { Layout, PageBlock } from "vtex.styleguide"
import axios from 'axios'
import { List } from "./components/List";

interface Lead {
  name: string
  phone: string
  email: string
  id: string
}

const AdminLead: FC = () => {
  const [leads, setLeads] = useState<Lead[]>([])
  useEffect(() => {
    axios.get('https://h3sr042qxg.execute-api.us-east-1.amazonaws.com/leads')
      .then((resp) => setLeads(resp.data.Items))
      .catch((_) => setLeads([]))
  }, [])

  return (
    <Layout>
      <PageBlock
       title="Leads"
       subtitle="Pessoas cadastradas"
       variation="full"
      >
        <h1>Pessoas que enviaram o form de desconto</h1>
        <List>
          {leads.map(lead => (
            <li key={lead.id}>
              <p>Nome: {lead.name}</p>
              <p>Email: {lead.email}</p>
              <p>Telefone: {lead.phone}</p>
            </li>
          ))}
        </List>
      </PageBlock>
    </Layout>
  );
};

export default AdminLead