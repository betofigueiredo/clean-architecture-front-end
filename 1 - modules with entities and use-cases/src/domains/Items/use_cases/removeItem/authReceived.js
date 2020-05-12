const authReceived = (state = {}, action = {}) => {
	const updated_state = { ...state };
	const usuario = action.payload?.data || {};

	function updateState() {
		return {
			...updated_state,
			fetching_auth: 'LOADED',
		};
	}

	function setInfoFornecedor(fornecedor) {
		// legacy
		const fornecedor_legacy = {
			id: fornecedor.id,
			nome: fornecedor.nome,
			status: fornecedor.status,
			documento: fornecedor.documento,
			razao_social: fornecedor.razao_social,
			site: fornecedor.site,
			endereco: fornecedor.endereco,
		};
		updated_state.fornecedor_legacy = { ...fornecedor_legacy };
		return updateState(fornecedor);
	}

	function pegaPrimeiroFornecedorDaLista(fornecedores_cadastrados) {
		// legacy
		const fornecedor = fornecedores_cadastrados[0]?.fornecedor || {};
		return setInfoFornecedor(fornecedor);
	}

	function setInfoEmpresas() {
		const fornecedores_cadastrados = usuario.fornecedores
			.filter(f => f.fornecedor.status >= 0);
		const all_ids = [];
		const by_id = fornecedores_cadastrados
			.reduce((result, current) => {
				const fornecedor_id = current?.fornecedor?.id;
				all_ids.push(fornecedor_id);
				return {
					...result,
					[fornecedor_id]: current,
				};
			}, {});
		const empresas = { all_ids, by_id };
		updated_state.empresas = { ...empresas };
		return pegaPrimeiroFornecedorDaLista(fornecedores_cadastrados);
	}

	function setVendedorLocalstorage() {
		localStorage.setItem('user', JSON.stringify(usuario));
		return setInfoEmpresas();
	}

	function setInfoVendedor() {
		updated_state.id = usuario.id;
		updated_state.email = usuario.email;
		updated_state.nome = usuario.nome;
		updated_state.status = usuario.status; // TODO check correct status
		updated_state.aceitou_termos = usuario.aceitou_termos;
		updated_state.cadastrado_por = usuario.cadastrado_por;
		updated_state.telefones = usuario.telefones;
		updated_state.estah_confirmado = usuario.estah_confirmado;
		return setVendedorLocalstorage();
	}

	function setToken() {
		const token = localStorage.getItem('token');
		updated_state.token = token;
		return setInfoVendedor();
	}

	return setToken();
};

export default authReceived;
