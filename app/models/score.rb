class Score < ApplicationRecord
  belongs_to :user
  validates :first, numericality:true
  validates :second, numericality:true
  validates :third, numericality:true
end
