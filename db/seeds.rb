puts 'Cleaning database...'
Divergence.destroy_all
Drug.destroy_all
BoardSource.destroy_all
UserPatient.destroy_all
Board.destroy_all
User.destroy_all
Patient.destroy_all
Source.destroy_all
puts 'Database clean'

puts 'Creating users...'
user1 = User.create!(email: "email1@example.com", password: 'azerty', first_name: "Alexandre", last_name: "Bouvier")
user2 = User.create!(email: "email2@example.com", password: 'azerty', first_name: "Kevin", last_name: "Chavanne")
user3 = User.create!(email: "email3@example.com", password: 'azerty', first_name: "Joseph", last_name: "Blanchard")
puts 'Finished users'

puts 'Creating patients...'
patient1 = Patient.create!(first_name: 'John', last_name: 'Doe', birthdate: '1956-11-14', entrancedate: '2018-11-20')
# patient2 = Patient.create!(first_name: 'Marty', last_name: 'Macfly', birthdate: '1984-02-13', entrancedate: '2018-11-23')
# patient3 = Patient.create!(first_name: 'Daenerys', last_name: 'Targaryen', birthdate: '1973-01-27', entrancedate: '2018-11-24')
# patient4 = Patient.create!(first_name: 'Patrick', last_name: 'Stewart', birthdate: '1936-12-20', entrancedate: '2018-11-25')
# patient5 = Patient.create!(first_name: 'Joseph', last_name: 'Blanchard', birthdate: '1959-02-17', entrancedate: '2018-11-26')
# patient6 = Patient.create!(first_name: 'Kevin', last_name: 'Chavanne', birthdate: '1961-09-29', entrancedate: '2018-10-29')
# patient7 = Patient.create!(first_name: 'Alexandre', last_name: 'Astier', birthdate: '2001-11-01', entrancedate: '2018-11-18')
# patient8 = Patient.create!(first_name: 'Mark', last_name: 'Hamil', birthdate: '1991-08-21', entrancedate: '2018-11-24')
# patient9 = Patient.create!(first_name: 'Carrie', last_name: 'Fisher', birthdate: '1977-11-14', entrancedate: '2018-11-26')


board_history_patient1 = patient1.boards.find_by(name: "Historique médicamenteux")
board_conciliation_open = patient1.boards.find_by(name: "Conciliation d'entrée")
puts 'Finished patients!'

puts 'Creating sources...'
# sources1 = SourceDrug.create!(name: 'Seed Famille', final_source: false)
sources2 = SourceDrug.create!(name: 'Seed Famille', final_source: false)
sources3 = SourceDrug.create!(name: 'Seed Medecin de famille', final_source: false)
# sources4 = SourceDrug.create!(name: "Seed Pharmacie d'officine", final_source: false)
# sources5 = SourceDrug.create!(name: 'Seed Patient', final_source: false)
# sources6 = SourceDrug.create!(name: 'BMO', final_source: true)
puts 'Finished sources!'

# puts 'Creating drugs...'
drugs1 = Drug.create!(name: 'Seed Doliprane', source: board_history_patient1.sources.find_by(name: 'BMO') , morning: '1', lunch: '1', evening: '1', night: '0', comment: 'Le patient ne le prend pas', position: 2)
# drugs2 = Drug.create!(name: 'Seed Ibuprofene', source: sources3 , morning: '1.5', lunch: '1', evening: '2', night: '1', comment: '', position: 2)
# drugs3 = Drug.create!(name: 'Seed dafalgan', source: sources6 , morning: '1.5', lunch: '1', evening: '2', night: '1', comment: 'Le patient ne prend pas le matin', position: 2)
# drugs4 = Drug.create!(name: 'Seed Levothyrox', source: sources5 , morning: '1.5', lunch: '1.5', evening: '2', night: '1', comment: '', position: 2)
# drugs5 = Drug.create!(name: 'Seed Imodium', source: sources4 , morning: '1.5', lunch: '1', evening: '3', night: '1', comment: '', position: 3)
# drugs6 = Drug.create!(name: 'Seed Kardegic', source: sources6 , morning: '1.5', lunch: '1', evening: '1', night: '1', comment: '', position: 3)
# puts 'Finished drugs!'

puts 'Creating boards...'
# board1 = Board.create!(name: "Historique médicamenteux", patient: patient1)
# board2 = Board.create!(name: "conciliation d'entrée", patient: patient1)
# board3 = Board.create!(name: "conciliation de sortie", patient: patient1)
# board4 = Board.create!(name: "historique medicamenteux", patient: patient2)
# board5 = Board.create!(name: "historique medicamenteux", patient: patient3)
# board6 = Board.create!(name: "historique medicamenteux", patient: patient4)
# board7 = Board.create!(name: "conciliation d'entrée", patient: patient4)
puts 'Finished boards'

puts 'Creating board_sources...'
board_sources1 = BoardSource.create!(board: board_history_patient1, source: sources2)
board_sources2 = BoardSource.create!(board: board_history_patient1, source: sources3)
# board_sources3 = BoardSource.create!(board: patient1.boards.first, source: sources4)
# board_sources4 = BoardSource.create!(board: patient1.boards.first, source: sources5)
# board_sources5 = BoardSource.create!(board: patient1.boards.first, source: sources6)

puts 'Finished board_sources!'

# puts 'Creating ivergences...'
divergences1 = Divergence.create!(position: 2, error_type: '' ,correction: '' , character: 'Non pris en compte' ,source: board_conciliation_open.divergence )
# divergences2 = Divergence.create!(position: '4', error_type: '' ,correction: '' , character: '' ,source: sources1 )
# divergences3 = Divergence.create!(position: '1', error_type: '' ,correction: '' , character: '' ,source: sources1 )
# puts 'Finished divergences!'

# puts 'Creating user patients...'
# user_patients1 = UserPatient.create!(user: user1, patient: patient1)
# user_patients2 = UserPatient.create!(user: user1, patient: patient3)
# user_patients3 = UserPatient.create!(user: user1, patient: patient4)
# user_patients4 = UserPatient.create!(user: user2, patient: patient1)
# user_patients5 = UserPatient.create!(user: user2, patient: patient7)
# user_patients6 = UserPatient.create!(user: user3, patient: patient8)
# puts 'Finished user patients!'
puts "Seed deployed, everything okay !!!!"

