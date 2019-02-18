package es.salesianos.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import es.salesianos.model.Account;

@Repository
public class AccountRepository {
	private List<Account> accounts;


	public List<Account> getAccounts() {
		return accounts;
	}

	public void setAccounts(List<Account> accounts) {
		this.accounts = accounts;
	}

	public void depositOrWithdraw(String accountNumber, Integer amount) {
		Optional<Account> accountToModify = accounts.stream().filter(a -> a.getAccountNumber().equals(accountNumber))
				.findFirst();
		Account account = accountToModify.orElse(null);

		account.setBalance(account.getBalance() + amount);
	}

}
