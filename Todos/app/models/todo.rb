class Todo < ActiveRecord::Base
  validates :title, :done, presence: true
end
