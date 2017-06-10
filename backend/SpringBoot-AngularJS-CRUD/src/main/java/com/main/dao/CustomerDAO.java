package com.main.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import com.main.model.Customer;

@Component
public class CustomerDAO {

	// Dummy database
	private static List<Customer> customers;
	{
		customers = new ArrayList<Customer>();
		customers.add(new Customer(100, "Dharmendra", "Pawar", "dharmendra.pawar@gmail.com", "470-809-3327"));
		customers.add(new Customer(101, "John", "Doe", "djohn@gmail.com", "121-232-3435"));
		customers.add(new Customer(201, "Russ", "Smith", "sruss@gmail.com", "343-545-2345"));
		customers.add(new Customer(301, "Kate", "Williams", "kwilliams@gmail.com", "876-237-2987"));

	}

	public List list() {
		return customers;
	}

	public Customer get(Long id) {

		for (Customer c : customers) {
			if (c.getId().equals(id)) {
				return c;
			}
		}
		return null;
	}

	public Customer create(Customer customer) {

		List<Customer> customersTemp;

		if (customer.getId() == null) {
			customer.setId(System.currentTimeMillis());
			customers.add(customer);
		} else {
			customersTemp = customers;
			for (int i = 0; i < customersTemp.size(); i++) {

				if (customer.getId().equals(customersTemp.get(i).getId())) {
					customers.get(i).setEmail(customer.getEmail());
					customers.get(i).setLastName(customer.getLastName());
					customers.get(i).setMobile(customer.getMobile());
					customers.get(i).setFirstName(customer.getFirstName());
				}

			}
		}
		return customer;
	}

	public Long delete(Long id) {

		for (Customer c : customers) {
			if (c.getId().equals(id)) {
				customers.remove(c);
				return id;
			}
		}

		return null;
	}

	public Customer update(Long id, Customer customer) {

		for (Customer c : customers) {
			if (c.getId().equals(id)) {
				customer.setId(c.getId());
				customers.remove(c);
				customers.add(customer);
				return customer;
			}
		}

		return null;
	}

}