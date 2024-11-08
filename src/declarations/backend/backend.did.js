export const idlFactory = ({ IDL }) => {
  const Company = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Text,
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
