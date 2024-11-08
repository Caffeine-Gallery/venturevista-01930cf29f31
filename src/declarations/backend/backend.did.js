export const idlFactory = ({ IDL }) => {
  const Company = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'stage' : IDL.Text,
    'imageUrl' : IDL.Text,
    'yearFounded' : IDL.Text,
    'category' : IDL.Text,
  });
  return IDL.Service({
    'getCompaniesByCategory' : IDL.Func(
        [IDL.Text],
        [IDL.Vec(Company)],
        ['query'],
      ),
    'getPortfolio' : IDL.Func([], [IDL.Vec(Company)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
