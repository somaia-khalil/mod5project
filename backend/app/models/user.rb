class User < ApplicationRecord
    has_secure_password
    has_one :shopper
    has_one :customer
end

