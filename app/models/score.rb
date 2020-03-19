class Score < ApplicationRecord
  belongs_to :user
  validates :first, numericality:true
  validates :second, numericality:true
  validates :third, numericality:true

  validate :valid_score, :if => :valid_score?

  def valid_score?
    score_total = first + second + third
    if score_total > 10
      errors.add("score not valid because above 10")
    end
  end
end
